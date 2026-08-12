import { useState } from "react";
import { z } from "zod";

export const emailSchema = z
  .string()
  .trim()
  .min(1, "Email is required")
  .email("Enter a valid email address")
  .max(255);

export const nameSchema = z
  .string()
  .trim()
  .min(1, "Name is required")
  .max(100, "Keep this under 100 characters");

export const phoneSchema = z
  .string()
  .trim()
  .min(6, "Enter a valid phone number")
  .max(30, "Keep this under 30 characters")
  .regex(/^[0-9+()\-\s]+$/, "Use digits and + ( ) - only");

export const longTextSchema = z.string().trim().max(1000, "Keep this under 1000 characters");

export const requiredSchema = (label: string) =>
  z.string().trim().min(1, `${label} is required`).max(200, "Keep this under 200 characters");

/** POST form fields to the Netlify Function (Resend). */
export async function submitForm(formName: string, values: Record<string, string>) {
  const res = await fetch("/.netlify/functions/submit-form", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ formName, ...values }),
  });
  if (!res.ok) {
    throw new Error("Form submit failed");
  }
}

/** Small client-side form helper: local state, zod validation, email submit. */
export function useValidatedForm<T extends Record<string, string>>(
  initial: T,
  schema: z.ZodType<unknown, z.ZodTypeDef, T>,
  formName: string,
) {
  const [values, setValues] = useState<T>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [done, setDone] = useState(false);
  const [pending, setPending] = useState(false);
  const [submitError, setSubmitError] = useState<string | undefined>(undefined);

  const set = (key: keyof T) => (v: string) => {
    setValues((prev) => ({ ...prev, [key]: v }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
    setSubmitError(undefined);
  };

  const submit = async (e: React.FormEvent) => {
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
    setSubmitError(undefined);
    setPending(true);
    try {
      await submitForm(formName, values);
      setDone(true);
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setPending(false);
    }
  };

  const reset = () => {
    setValues(initial);
    setErrors({});
    setDone(false);
    setPending(false);
    setSubmitError(undefined);
  };

  return { values, errors, done, pending, submitError, set, submit, reset };
}
