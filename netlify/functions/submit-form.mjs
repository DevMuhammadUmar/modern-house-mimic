const ALLOWED_FORMS = new Set([
  "contact",
  "appraisal",
  "launches",
  "feedback",
  "newsletter",
]);

const FORM_LABELS = {
  contact: "Contact enquiry",
  appraisal: "Appraisal request",
  launches: "New launches registration",
  feedback: "Website feedback",
  newsletter: "Newsletter signup",
};

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function json(statusCode, body) {
  return {
    statusCode,
    headers: { "Content-Type": "application/json", ...corsHeaders },
    body: JSON.stringify(body),
  };
}

function formatBody(formName, fields) {
  const lines = [`Form: ${FORM_LABELS[formName] ?? formName}`, ""];
  for (const [key, value] of Object.entries(fields)) {
    if (key === "formName" || key === "botField") continue;
    const label = key.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase());
    lines.push(`${label}: ${value || "—"}`);
  }
  return lines.join("\n");
}

export async function handler(event) {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: corsHeaders, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return json(405, { error: "Method not allowed" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || "admin@parkwoodproperties.ae";
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !fromEmail) {
    console.error("Missing RESEND_API_KEY or CONTACT_FROM_EMAIL");
    return json(500, { error: "Email is not configured" });
  }

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return json(400, { error: "Invalid JSON" });
  }

  const { formName, botField, ...fields } = payload;

  // Honeypot: pretend success if filled
  if (botField) {
    return json(200, { ok: true });
  }

  if (!formName || !ALLOWED_FORMS.has(formName)) {
    return json(400, { error: "Unknown form" });
  }

  const stringFields = {};
  for (const [key, value] of Object.entries(fields)) {
    if (typeof value === "string") stringFields[key] = value.trim();
  }

  const replyTo =
    typeof stringFields.email === "string" && stringFields.email.includes("@")
      ? stringFields.email
      : undefined;

  const label = FORM_LABELS[formName] ?? formName;
  const emailPayload = {
    from: fromEmail,
    to: [toEmail],
    subject: `Parkwood Properties — ${label}`,
    text: formatBody(formName, stringFields),
  };
  if (replyTo) emailPayload.reply_to = replyTo;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailPayload),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("Resend error:", res.status, detail);
      return json(502, { error: "Failed to send email" });
    }

    return json(200, { ok: true });
  } catch (err) {
    console.error("submit-form error:", err);
    return json(500, { error: "Failed to send email" });
  }
}
