import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

import {
  FormSuccess,
  NetlifyFormMeta,
  RadioField,
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
import { propertyTypes } from "@/content/site";
import { buildBreadcrumbSchema, buildHead, SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/request-appraisal")({
  head: () => ({
    ...buildHead({
      title: "Property Valuation & Real Estate Appraisal Dubai | Parkwood Properties",
      description:
        "Request an accurate sale or rental property appraisal in Dubai. Our advisors evaluate comparable market data to provide honest valuation guidance for your home.",
      path: "/request-appraisal",
      schemas: [
        buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Request Appraisal", path: "/request-appraisal" },
        ]),
      ],
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Property Valuation & Appraisal in Dubai",
          url: `${SITE_URL}/request-appraisal`,
          description:
            "Request an accurate sale or rental property appraisal in Dubai. Our advisors evaluate comparable market data to provide honest valuation guidance for your home.",
        }),
      },
    ],
  }),
  component: RequestAppraisalPage,
});

const schema = z.object({
  fullName: nameSchema,
  email: emailSchema,
  phone: phoneSchema,
  location: requiredSchema("Property location"),
  propertyType: requiredSchema("Property type"),
  requestType: requiredSchema("Request type"),
  propertyDetails: longTextSchema.min(1, "Please describe the property"),
  message: longTextSchema,
});

function RequestAppraisalPage() {
  const form = useValidatedForm(
    {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      propertyType: "",
      requestType: "",
      propertyDetails: "",
      message: "",
    },
    schema,
    "appraisal",
  );

  return (
    <main>
      <PageHero
        kicker="Request Appraisal"
        title="What is your property worth?"
        body="Share a few details and we'll prepare an estimated sale or rental figure, along with a recommended approach."
      />

      <SectionBlock>
        <div className="mx-auto max-w-2xl">
          {form.done ? (
            <FormSuccess
              title="Your request has been received"
              body="One of our advisers will be in touch within one working day with an appraisal and next steps."
            />
          ) : (
            <form
              name="appraisal"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={form.submit}
              className="space-y-8"
              noValidate
            >
              <NetlifyFormMeta formName="appraisal" />
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
                <TextField
                  label="Property location / area"
                  name="location"
                  value={form.values.location}
                  onChange={form.set("location")}
                  error={form.errors.location}
                />
              </div>

              <SelectField
                label="Property type"
                name="propertyType"
                value={form.values.propertyType}
                onChange={form.set("propertyType")}
                options={propertyTypes}
                error={form.errors.propertyType}
              />

              <RadioField
                label="Request type"
                name="requestType"
                value={form.values.requestType}
                onChange={form.set("requestType")}
                options={["Sale Price", "Rental Price"]}
                error={form.errors.requestType}
              />

              <TextAreaField
                label="Property details"
                name="propertyDetails"
                rows={4}
                placeholder="Bedrooms, size, floor, view, condition, service charges…"
                value={form.values.propertyDetails}
                onChange={form.set("propertyDetails")}
                error={form.errors.propertyDetails}
              />

              <TextAreaField
                label="Additional message"
                name="message"
                rows={3}
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
                {form.pending ? "Sending…" : "Request appraisal"}
              </button>
            </form>
          )}
        </div>
      </SectionBlock>
    </main>
  );
}
