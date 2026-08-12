import type { ReactNode } from "react";

const controlBase =
  "w-full border border-input bg-background px-4 py-3 text-base outline-none transition-colors focus:border-foreground";

/** Hidden form-name + honeypot for Netlify Forms AJAX submissions. */
export function NetlifyFormMeta({ formName }: { formName: string }) {
  return (
    <>
      <input type="hidden" name="form-name" value={formName} />
      <p className="hidden" aria-hidden="true">
        <label>
          Don’t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
    </>
  );
}

export function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string | undefined;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={htmlFor} className="label block text-muted-foreground">
        {label}
      </label>
      {children}
      {error ? (
        <p role="alert" className="label text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function TextField({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  error?: string | undefined;
  type?: string;
  placeholder?: string;
}) {
  return (
    <Field label={label} htmlFor={name} error={error}>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        onChange={(e) => onChange(e.target.value)}
        className={controlBase}
      />
    </Field>
  );
}

export function TextAreaField({
  label,
  name,
  value,
  onChange,
  error,
  rows = 4,
  placeholder,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  error?: string | undefined;
  rows?: number;
  placeholder?: string;
}) {
  return (
    <Field label={label} htmlFor={name} error={error}>
      <textarea
        id={name}
        name={name}
        rows={rows}
        value={value}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        onChange={(e) => onChange(e.target.value)}
        className={controlBase}
      />
    </Field>
  );
}

export function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  error,
  placeholder = "Please select",
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  error?: string | undefined;
  placeholder?: string;
}) {
  return (
    <Field label={label} htmlFor={name} error={error}>
      <select
        id={name}
        name={name}
        value={value}
        aria-invalid={Boolean(error)}
        onChange={(e) => onChange(e.target.value)}
        className={`${controlBase} appearance-none`}
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </Field>
  );
}

export function RadioField({
  label,
  name,
  value,
  onChange,
  options,
  error,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  error?: string | undefined;
}) {
  return (
    <fieldset className="space-y-3">
      <legend className="label text-muted-foreground">{label}</legend>
      <input type="hidden" name={name} value={value} />
      <div className="flex flex-wrap gap-3">
        {options.map((o) => {
          const active = value === o;
          return (
            <button
              key={o}
              type="button"
              aria-pressed={active}
              onClick={() => onChange(o)}
              className={`label border px-5 py-3 transition-colors ${
                active
                  ? "border-foreground bg-foreground text-background"
                  : "border-input hover:border-foreground"
              }`}
            >
              {o}
            </button>
          );
        })}
      </div>
      {error ? (
        <p role="alert" className="label text-destructive">
          {error}
        </p>
      ) : null}
    </fieldset>
  );
}

export function FormSuccess({ title, body }: { title: string; body: string }) {
  return (
    <div role="status" className="border border-foreground/20 bg-accent px-6 py-10 text-center">
      <p className="label text-muted-foreground">Thank you</p>
      <h3 className="display mt-3 text-2xl">{title}</h3>
      <p className="mt-3 text-base leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}
