import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { FormSuccess, TextAreaField, TextField } from "@/components/site/form-fields";
import {
  emailSchema,
  longTextSchema,
  nameSchema,
  phoneSchema,
  submitToNetlify,
  useValidatedForm,
} from "@/components/site/use-validated-form";
import { company, nav, socials, type SocialIcon } from "@/content/site";

const socialIcons: Record<SocialIcon, typeof Linkedin> = {
  linkedin: Linkedin,
  facebook: Facebook,
  instagram: Instagram,
};

const launchSchema = z.object({
  fullName: nameSchema,
  email: emailSchema,
  phone: phoneSchema,
  message: longTextSchema,
});

function RegisterLaunchesDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const form = useValidatedForm(
    { fullName: "", email: "", phone: "", message: "" },
    launchSchema,
    "launches",
  );

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        onOpenChange(v);
        if (!v) form.reset();
      }}
    >
      <DialogContent className="max-w-lg rounded-none border-border bg-background">
        <DialogHeader>
          <DialogTitle className="display text-2xl">Register for new launches</DialogTitle>
        </DialogHeader>
        {form.done ? (
          <FormSuccess
            title="You're on the list"
            body="We'll be in touch as soon as the next release is announced."
          />
        ) : (
          <form onSubmit={form.submit} className="space-y-5" noValidate>
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
            <TextAreaField
              label="Message / property interest"
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
            <button type="submit" className="btn-outline w-full" disabled={form.pending}>
              {form.pending ? "Sending…" : "Register"}
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

const feedbackSchema = z.object({
  fullName: nameSchema,
  email: emailSchema,
  feedback: longTextSchema.min(1, "Please add your feedback"),
});

function FeedbackDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const form = useValidatedForm(
    { fullName: "", email: "", feedback: "" },
    feedbackSchema,
    "feedback",
  );

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        onOpenChange(v);
        if (!v) form.reset();
      }}
    >
      <DialogContent className="max-w-lg rounded-none border-border bg-background">
        <DialogHeader>
          <DialogTitle className="display text-2xl">Tell us what you think</DialogTitle>
        </DialogHeader>
        {form.done ? (
          <FormSuccess title="Thank you" body="Your feedback has been received — we read every note." />
        ) : (
          <form onSubmit={form.submit} className="space-y-5" noValidate>
            <TextField
              label="Name"
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
            <TextAreaField
              label="Feedback"
              name="feedback"
              value={form.values.feedback}
              onChange={form.set("feedback")}
              error={form.errors.feedback}
            />
            {form.submitError ? (
              <p role="alert" className="label text-destructive">
                {form.submitError}
              </p>
            ) : null}
            <button type="submit" className="btn-outline w-full" disabled={form.pending}>
              {form.pending ? "Sending…" : "Send feedback"}
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

function Newsletter() {
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | undefined>(undefined);
  const [submitError, setSubmitError] = useState<string | undefined>(undefined);
  const [pending, setPending] = useState(false);
  const [done, setDone] = useState(false);

  return (
    <div>
      <h3 className="label text-muted-foreground">Subscribe to our newsletter</h3>
      {done ? (
        <p role="status" className="mt-4 text-base">
          Thank you — please check your inbox to confirm.
        </p>
      ) : (
        <form
          className="mt-4 space-y-3"
          noValidate
          onSubmit={async (e) => {
            e.preventDefault();
            const parsed = emailSchema.safeParse(value);
            if (!parsed.success) {
              setError(parsed.error.issues[0]?.message ?? "Enter a valid email address");
              return;
            }
            setError(undefined);
            setSubmitError(undefined);
            setPending(true);
            try {
              await submitToNetlify("newsletter", { email: parsed.data });
              setDone(true);
            } catch {
              setSubmitError("Something went wrong. Please try again.");
            } finally {
              setPending(false);
            }
          }}
        >
          <input
            type="email"
            name="email"
            value={value}
            aria-label="Email address"
            aria-invalid={Boolean(error)}
            placeholder="Email address"
            onChange={(e) => {
              setValue(e.target.value);
              setError(undefined);
              setSubmitError(undefined);
            }}
            className="w-full border border-input bg-background px-4 py-3 text-base outline-none focus:border-foreground"
          />
          {error ? (
            <p role="alert" className="label text-destructive">
              {error}
            </p>
          ) : null}
          {submitError ? (
            <p role="alert" className="label text-destructive">
              {submitError}
            </p>
          ) : null}
          <button type="submit" className="btn-outline w-full" disabled={pending}>
            {pending ? "Sending…" : "Subscribe"}
          </button>
        </form>
      )}
    </div>
  );
}

export function Footer() {
  const [launchOpen, setLaunchOpen] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false);

  return (
    <footer className="bg-brand px-5 py-12 text-brand-foreground sm:px-6 sm:py-14 md:px-10">
      <div className="mx-auto grid max-w-[1400px] gap-10 sm:grid-cols-2 md:grid-cols-4">
        <div className="sm:col-span-2 md:col-span-1">
          <div className="flex min-w-0 items-center gap-3">
            <img
              src={company.logo}
              alt=""
              loading="lazy"
              width={816}
              height={816}
              className="h-11 w-auto shrink-0 object-contain sm:h-12 md:h-14"
              style={{
                filter: "invert(1)",
              }}
            />
            <p
              className="text-base tracking-[0.2em] uppercase sm:text-lg sm:tracking-[0.24em]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {company.name}
            </p>
          </div>
          <p className="mt-4 text-base leading-relaxed opacity-80">{company.tagline}</p>
          <div className="mt-6 space-y-1 text-base opacity-80">
            <p>
              <a href={`mailto:${company.email}`} className="hover:opacity-60">
                {company.email}
              </a>
            </p>
            <p>
              <a href={company.websiteHref} className="hover:opacity-60">
                {company.website}
              </a>
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button type="button" className="btn-outline" onClick={() => setLaunchOpen(true)}>
              Register for new launches
            </button>
            <button type="button" className="btn-outline" onClick={() => setFeedbackOpen(true)}>
              Tell us what you think
            </button>
          </div>
        </div>

        <div>
          <h3 className="label opacity-70">Explore</h3>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-base hover:opacity-60">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="label opacity-70">Follow us</h3>
          <ul className="mt-4 flex gap-3">
            {socials.map((s) => {
              const Icon = socialIcons[s.icon];
              return (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={s.label}
                    className="inline-flex size-11 items-center justify-center border border-current transition-opacity hover:opacity-60"
                  >
                    <Icon className="size-4" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <Newsletter />
      </div>

      <div className="mx-auto mt-12 flex max-w-[1400px] sm:mt-14 flex-col gap-3 border-t border-current/20 pt-6 md:flex-row md:items-center md:justify-between">
        <p className="label opacity-70">
          © {new Date().getFullYear()} {company.name} — {company.tagline}
        </p>

        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          <li>
            <Link to="/privacy-policy" className="label hover:opacity-60">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/terms-and-conditions" className="label hover:opacity-60">
              Terms &amp; Conditions
            </Link>
          </li>
        </ul>
      </div>

      <RegisterLaunchesDialog open={launchOpen} onOpenChange={setLaunchOpen} />
      <FeedbackDialog open={feedbackOpen} onOpenChange={setFeedbackOpen} />
    </footer>
  );
}
