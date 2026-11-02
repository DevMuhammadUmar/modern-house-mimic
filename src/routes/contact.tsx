import { createFileRoute } from "@tanstack/react-router";
import { Globe, Mail, Phone } from "lucide-react";
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
import { WhatsAppIcon } from "@/components/site/WhatsAppButton";
import { buildHead, SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    ...buildHead({
      title: "Contact Real Estate Advisors in Dubai | Parkwood Properties",
      description:
        "Connect with Parkwood Properties in Dubai for luxury residential purchases, off-plan investment guidance, or appraisals. Our team responds within one working day.",
      path: "/contact",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Parkwood Properties Dubai",
          url: `${SITE_URL}/contact`,
          description:
            "Connect with Parkwood Properties in Dubai for luxury residential purchases, off-plan investment guidance, or appraisals.",
          mainEntity: {
            "@context": "https://schema.org",
            "@type": ["RealEstateAgent", "LocalBusiness"],
            name: company.name,
            url: SITE_URL,
            telephone: company.phone,
            email: company.email,
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: company.phone,
                contactType: "customer service",
                areaServed: "AE",
              },
              {
                "@type": "ContactPoint",
                telephone: company.whatsappNumber,
                contactType: "WhatsApp Inquiries",
                url: company.whatsappHref,
                areaServed: ["AE", "Worldwide"],
              },
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Dubai",
              addressCountry: "AE",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 25.2048,
              longitude: 55.2708,
            },
          },
        }),
      },
    ],
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
              <h2 className="label text-muted-foreground">Office Phone</h2>
              <p className="mt-3 text-base">
                <a
                  href={`tel:${company.phone}`}
                  className="inline-flex items-center gap-2 hover:opacity-60"
                >
                  <Phone className="size-4 shrink-0 text-muted-foreground" />
                  <span>{company.phoneDisplay}</span>
                </a>
              </p>
            </div>
            <div>
              <h2 className="label text-muted-foreground">WhatsApp</h2>
              <p className="mt-3 text-base">
                <a
                  href={company.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:opacity-60"
                >
                  <WhatsAppIcon className="size-4 shrink-0 text-[#25D366]" />
                  <span>{company.whatsappDisplay}</span>
                </a>
              </p>
            </div>
            <div>
              <h2 className="label text-muted-foreground">Email</h2>
              <p className="mt-3 text-base">
                <a
                  href={`mailto:${company.email}`}
                  className="inline-flex items-center gap-2 hover:opacity-60"
                >
                  <Mail className="size-4 shrink-0 text-muted-foreground" />
                  <span>{company.email}</span>
                </a>
              </p>
            </div>
            <div>
              <h2 className="label text-muted-foreground">Website</h2>
              <p className="mt-3 text-base">
                <a
                  href={company.websiteHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:opacity-60"
                >
                  <Globe className="size-4 shrink-0 text-muted-foreground" />
                  <span>{company.website}</span>
                </a>
              </p>
            </div>
          </aside>
        </div>
      </SectionBlock>
    </main>
  );
}
