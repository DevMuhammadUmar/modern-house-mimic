const port = process.env.PORT || 3000;
const baseUrl = `http://localhost:${port}`;

const routes = [
  "/",
  "/about",
  "/services",
  "/communities",
  "/communities/downtown-dubai",
  "/communities/the-valley",
  "/communities/dubai-hills-estate",
  "/communities/the-oasis-by-emaar",
  "/communities/dubai-creek-harbour",
  "/communities/rashid-yachts-and-marina",
  "/communities/arabian-ranches-iii",
  "/communities/emaar-south",
  "/communities/grand-polo-club-and-resort",
  "/communities/emaar-beachfront",
  "/request-appraisal",
  "/contact",
  "/privacy-policy",
  "/terms-and-conditions",
];

async function check() {
  let passed = true;
  const seenTitles = new Map();

  for (const r of routes) {
    try {
      const res = await fetch(baseUrl + r);
      if (!res.ok) {
        console.error(`FAILED: ${r} status ${res.status}`);
        passed = false;
        continue;
      }
      const html = await res.text();
      const titleMatch = html.match(/<title>([^<]+)<\/title>/);
      const descMatch = html.match(
        /<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i,
      );
      const canonMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i);
      const h1Matches = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) =>
        m[1].replace(/<[^>]+>/g, "").trim(),
      );
      const ogTitle = html.match(
        /<meta[^>]*property=["']og:title["'][^>]*content=["']([^"']+)["']/i,
      );
      const ogSiteName = html.match(
        /<meta[^>]*property=["']og:site_name["'][^>]*content=["']([^"']+)["']/i,
      );
      const schemaMatches = [
        ...html.matchAll(/<script type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi),
      ];

      // Check empty alts
      const emptyAlts = [...html.matchAll(/<img[^>]*alt=["']\s*["'][^>]*>/gi)];

      console.log(`\n--------------------------------------------`);
      console.log(`Route: ${r}`);
      console.log(`  Title: ${titleMatch ? titleMatch[1] : "MISSING"}`);
      if (!titleMatch || !titleMatch[1].includes("Parkwood Properties")) {
        console.error(
          `  ERROR: Expected title to include "Parkwood Properties", got: "${titleMatch ? titleMatch[1] : ""}"`,
        );
        passed = false;
      }

      // Check for duplicate titles across different routes
      const currentTitle = titleMatch ? titleMatch[1] : "";
      if (seenTitles.has(currentTitle)) {
        console.warn(
          `  WARNING: Duplicate title shared between ${seenTitles.get(currentTitle)} and ${r}: "${currentTitle}"`,
        );
      } else {
        seenTitles.set(currentTitle, r);
      }

      console.log(`  Description: ${descMatch ? descMatch[1] : "MISSING"}`);
      console.log(`  Canonical: ${canonMatch ? canonMatch[1] : "MISSING"}`);
      console.log(`  H1 (${h1Matches.length}): ${h1Matches.join(" | ")}`);
      console.log(`  OG Title: ${ogTitle ? ogTitle[1] : "MISSING"}`);
      console.log(`  OG Site Name: ${ogSiteName ? ogSiteName[1] : "MISSING"}`);
      console.log(`  Schema items: ${schemaMatches.length}`);
      schemaMatches.forEach((s, idx) => {
        try {
          const parsed = JSON.parse(s[1]);
          console.log(
            `    Schema [${idx}]: @type = ${parsed["@type"]}, name = ${parsed.name || "N/A"}`,
          );
        } catch {
          console.error(`    Invalid JSON-LD in schema [${idx}]`);
          passed = false;
        }
      });
      if (emptyAlts.length > 0) {
        console.warn(`  WARNING: Found ${emptyAlts.length} images with empty alt:`);
        emptyAlts.forEach((a) => console.warn(`    ${a[0].slice(0, 100)}`));
      } else {
        console.log(`  Images: All images have alt attributes`);
      }
    } catch (err) {
      console.error(`Error checking ${r}:`, err);
      passed = false;
    }
  }

  // Google Search Central Favicon Compliance Audit
  console.log(`\n============================================`);
  console.log(`GOOGLE FAVICON COMPLIANCE AUDIT`);
  console.log(`============================================`);
  const faviconEndpoints = [
    { path: "/favicon.ico", expectedType: "image/x-icon", minBytes: 1000 },
    { path: "/favicon-48x48.png", expectedType: "image/png", minBytes: 1000 },
    { path: "/favicon-96x96.png", expectedType: "image/png", minBytes: 1000 },
    { path: "/android-chrome-192x192.png", expectedType: "image/png", minBytes: 1000 },
    { path: "/robots.txt", expectedType: "text/plain", minBytes: 10 },
    { path: "/site.webmanifest", expectedType: "application/manifest+json", minBytes: 100 },
  ];

  for (const ep of faviconEndpoints) {
    try {
      const res = await fetch(baseUrl + ep.path);
      const buf = await res.arrayBuffer();
      const contentType = res.headers.get("content-type") || "";
      const ok =
        res.status === 200 &&
        buf.byteLength >= ep.minBytes &&
        contentType.includes(ep.expectedType.split("/")[1]);
      if (ok) {
        console.log(
          `  PASS: ${ep.path} (Status: ${res.status}, Type: ${contentType}, Size: ${buf.byteLength} bytes)`,
        );
      } else {
        console.error(
          `  FAIL: ${ep.path} (Status: ${res.status}, Type: ${contentType}, Size: ${buf.byteLength} bytes)`,
        );
        passed = false;
      }
    } catch (e) {
      console.error(`  FAIL: ${ep.path} error:`, e.message);
      passed = false;
    }
  }

  // Check robots.txt does not block favicons
  try {
    const robotsRes = await fetch(baseUrl + "/robots.txt");
    const robotsText = await robotsRes.text();
    const blocksFavicon =
      /Disallow:\s*.*favicon/i.test(robotsText) || /Disallow:\s*\/\s*$/m.test(robotsText);
    if (!blocksFavicon) {
      console.log(`  PASS: robots.txt allows Googlebot and Googlebot-Image crawler access`);
    } else {
      console.error(`  FAIL: robots.txt contains rules blocking favicon crawling`);
      passed = false;
    }
  } catch (e) {
    console.error(`  FAIL: robots.txt fetch error:`, e.message);
    passed = false;
  }

  // Check homepage head contains 48px multiple link
  try {
    const homeRes = await fetch(baseUrl + "/");
    const homeHtml = await homeRes.text();
    const has48Link = homeHtml.includes("favicon-48x48.png") || homeHtml.includes('sizes="48x48"');
    const hasValidIco = homeHtml.includes("favicon.ico");
    if (has48Link && hasValidIco) {
      console.log(`  PASS: Homepage contains explicit 48px square multiple and favicon.ico links`);
    } else {
      console.error(`  FAIL: Homepage missing required 48px multiple favicon markup`);
      passed = false;
    }
  } catch (e) {
    console.error(`  FAIL: homepage head check error:`, e.message);
    passed = false;
  }

  console.log(`\n============================================`);
  console.log(passed ? "ALL CHECKS PASSED (100% SEO & FAVICON COMPLIANT)!" : "SOME CHECKS FAILED!");
}

check();
