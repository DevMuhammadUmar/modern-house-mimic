import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

import {
  FormSuccess,
  NetlifyFormMeta,
  SelectField,
  TextAreaField,
  TextField,
} from "@/components/site/form-fields";
import { PageHero, SectionBlock } from "@/components/site/sections";
import {
  emailSchema,
  longTextSchema,
  nameSchema,
  phoneSchema,
  requiredSchema,
  useValidatedForm,
} from "@/components/site/use-validated-form";
import { company, inquiryTypes } from "@/content/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Parkwood Properties Dubai" },
      {
        name: "description",
        content:
          "Get in touch with Parkwood Properties about a property, a career, feedback or a general enquiry. We reply within one working day.",
      },
      { property: "og:title", content: "Contact Us — Parkwood Properties Dubai" },
      {
        property: "og:description",
        content: "Send us a property, career, feedback or general enquiry.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://modern-house-mimic.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://modern-house-mimic.lovable.app/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  fullName: nameSchema,
  email: emailSchema,
  phone: phoneSchema,
  inquiryType: requiredSchema("Inquiry type"),
  message: longTextSchema.min(1, "Please add a message"),
});

function ContactPage() {
  const form = useValidatedForm(
    { fullName: "", email: "", phone: "", inquiryType: "", message: "" },
    schema,
    "contact",
  );

  return (
    <main>
      <PageHero
        kicker="Contact Us"
        title="Start a conversation"
        body="Whether it's a property, a role with us, or something you'd like to tell us — we read everything."
      />

      <SectionBlock>
        <div className="grid gap-12 md:grid-cols-[2fr_1fr] md:gap-16">
          <div>
            {form.done ? (
              <FormSuccess
                title="Message sent"
                body="Thank you for getting in touch — we'll reply within one working day."
              />
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={form.submit}
                className="space-y-8"
                noValidate
              >
                <NetlifyFormMeta formName="contact" />
                <div className="grid gap-6 md:grid-cols-2">
                  <TextField
                    label="Full name"
                    name="fullName"
                    value={form.values.fullName}
                    onChange={form.set("fullName")}
                    error={form.errors.fullName}
                  />
                  <TextField
                    label="Email"
                    name="email"
                    type="email"
                    value={form.values.email}
                    onChange={form.set("email")}
                    error={form.errors.email}
                  />
                  <TextField
                    label="Phone number"
                    name="phone"
                    type="tel"
                    value={form.values.phone}
                    onChange={form.set("phone")}
                    error={form.errors.phone}
                  />
                  <SelectField
                    label="Inquiry type"
                    name="inquiryType"
                    value={form.values.inquiryType}
                    onChange={form.set("inquiryType")}
                    options={inquiryTypes}
                    error={form.errors.inquiryType}
                  />
                </div>

                <TextAreaField
                  label="Message"
                  name="message"
                  rows={5}
                  value={form.values.message}
                  onChange={form.set("message")}
                  error={form.errors.message}
                />

                {form.submitError ? (
                  <p role="alert" className="label text-destructive">
                    {form.submitError}
                  </p>
                ) : null}

                <button
                  type="submit"
                  className="btn-outline w-full sm:w-auto"
                  disabled={form.pending}
                >
                  {form.pending ? "Sending…" : "Send message"}
                </button>
              </form>
            )}
          </div>

          <aside className="space-y-8">
            <div>
              <h2 className="label text-muted-foreground">Email</h2>
              <p className="mt-3 text-base">
                <a href={`mailto:${company.email}`} className="hover:opacity-60">
                  {company.email}
                </a>
              </p>
            </div>
            <div>
              <h2 className="label text-muted-foreground">Website</h2>
              <p className="mt-3 text-base">
                <a href={company.websiteHref} className="hover:opacity-60">
                  {company.website}
                </a>
              </p>
            </div>
          </aside>

        </div>
      </SectionBlock>
    </main>
  );
}
