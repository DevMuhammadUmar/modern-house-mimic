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

/** Small client-side form helper: local state, zod validation, success flag. */
export function useValidatedForm<T extends Record<string, string>>(
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
