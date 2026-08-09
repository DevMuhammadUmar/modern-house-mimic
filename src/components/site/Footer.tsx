import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { FormSuccess, TextAreaField, TextField } from "@/components/site/form-fields";
import { company, nav, socials, type SocialIcon } from "@/content/site";

const socialIcons: Record<SocialIcon, typeof Linkedin> = {
  linkedin: Linkedin,
  facebook: Facebook,
  instagram: Instagram,
};

const email = z.string().trim().min(1, "Email is required").email("Enter a valid email address").max(255);
const name = z.string().trim().min(1, "Name is required").max(100, "Keep this under 100 characters");
const phone = z
  .string()
  .trim()
  .min(6, "Enter a valid phone number")
  .max(30, "Keep this under 30 characters")
  .regex(/^[0-9+()\-\s]+$/, "Use digits and + ( ) - only");
const longText = z.string().trim().max(1000, "Keep this under 1000 characters");

function useValidatedForm<T extends Record<string, string>>(
  initial: T,
  schema: z.ZodType<unknown, z.ZodTypeDef, T>,
) {
  const [values, setValues] = useState<T>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [done, setDone] = useState(false);

  const set = (key: keyof T) => (v: string) => {
    setValues((prev) => ({ ...prev, [key]: v }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Partial<Record<keyof T, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof T;
        if (key && !next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setDone(true);
  };

  const reset = () => {
    setValues(initial);
    setErrors({});
    setDone(false);
  };

  return { values, errors, done, set, submit, reset };
}

const launchSchema = z.object({
  fullName: name,
  email,
  phone,
  message: longText,
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
              name="launch-name"
              value={form.values.fullName}
              onChange={form.set("fullName")}
              error={form.errors.fullName}
            />
            <TextField
              label="Email"
              name="launch-email"
              type="email"
              value={form.values.email}
              onChange={form.set("email")}
              error={form.errors.email}
            />
            <TextField
              label="Phone number"
              name="launch-phone"
              type="tel"
              value={form.values.phone}
              onChange={form.set("phone")}
              error={form.errors.phone}
            />
            <TextAreaField
              label="Message / property interest"
              name="launch-message"
              rows={3}
              value={form.values.message}
              onChange={form.set("message")}
              error={form.errors.message}
            />
            <button type="submit" className="btn-outline w-full">
              Register
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

const feedbackSchema = z.object({
  fullName: name,
  email,
  feedback: longText.min(1, "Please add your feedback"),
});

function FeedbackDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const form = useValidatedForm({ fullName: "", email: "", feedback: "" }, feedbackSchema);

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
              name="feedback-name"
              value={form.values.fullName}
              onChange={form.set("fullName")}
              error={form.errors.fullName}
            />
            <TextField
              label="Email"
              name="feedback-email"
              type="email"
              value={form.values.email}
              onChange={form.set("email")}
              error={form.errors.email}
            />
            <TextAreaField
              label="Feedback"
              name="feedback-message"
              value={form.values.feedback}
              onChange={form.set("feedback")}
              error={form.errors.feedback}
            />
            <button type="submit" className="btn-outline w-full">
              Send feedback
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
          onSubmit={(e) => {
            e.preventDefault();
            const parsed = email.safeParse(value);
            if (!parsed.success) {
              setError(parsed.error.issues[0]?.message ?? "Enter a valid email address");
              return;
            }
            setError(undefined);
            setDone(true);
          }}
        >
          <input
            type="email"
            value={value}
            aria-label="Email address"
            aria-invalid={Boolean(error)}
            placeholder="Email address"
            onChange={(e) => {
              setValue(e.target.value);
              setError(undefined);
            }}
            className="w-full border border-input bg-background px-4 py-3 text-base outline-none focus:border-foreground"
          />
          {error ? (
            <p role="alert" className="label text-destructive">
              {error}
            </p>
          ) : null}
          <button type="submit" className="btn-outline w-full">
            Subscribe
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
    <footer className="bg-brand px-6 py-14 text-brand-foreground md:px-10">
      <div className="mx-auto grid max-w-[1400px] gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={company.logo}
              alt=""
              loading="lazy"
              width={816}
              height={816}
              className="size-10 object-contain brightness-0 invert"
            />
            <p
              className="text-lg tracking-[0.24em] uppercase"
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
          <div className="mt-6 flex flex-wrap gap-3">
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

      <div className="mx-auto mt-14 flex max-w-[1400px] flex-col gap-3 border-t border-current/20 pt-6 md:flex-row md:items-center md:justify-between">
        <p className="label opacity-70">
          © {new Date().getFullYear()} {company.name} — {company.tagline}
        </p>

        <ul className="flex flex-wrap gap-6">
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
