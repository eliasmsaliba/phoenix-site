"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";

export default function FormShell({
  children,
  successTitle = "Thank you — we've got it.",
  successBody = "A member of the Phoenix team will be in touch shortly. Everything you've shared stays confidential.",
  submitLabel = "Submit",
  submitClassName,
}: {
  children: ReactNode;
  successTitle?: string;
  successBody?: string;
  submitLabel?: string;
  submitClassName?: string;
}) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-teal-100 bg-teal-50/60 p-10 text-center">
        <CheckCircle2 size={32} className="text-teal-600" />
        <h3 className="font-display text-xl font-semibold text-ink-950">
          {successTitle}
        </h3>
        <p className="max-w-sm text-sm text-ink-700">{successBody}</p>
      </div>
    );
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {children}
      <button
        type="submit"
        className={
          submitClassName ??
          "mt-2 inline-flex items-center justify-center rounded-full bg-red-500 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-red-600"
        }
      >
        {submitLabel}
      </button>
    </form>
  );
}

export function Field({
  label,
  name,
  type = "text",
  required = true,
  placeholder,
  hideLabel = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  hideLabel?: boolean;
}) {
  return (
    <label className="flex flex-col gap-1.5 text-sm font-medium text-ink-900">
      <span className={hideLabel ? "sr-only" : undefined}>{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder ?? label}
        className="rounded-lg border border-teal-200 bg-white px-4 py-2.5 text-base font-normal text-ink-950 placeholder:text-ink-300 focus:border-teal-500 focus:outline-none"
      />
    </label>
  );
}

export function SelectField({
  label,
  name,
  options,
  required = true,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-1.5 text-sm font-medium text-ink-900">
      {label}
      <select
        name={name}
        required={required}
        defaultValue=""
        className="rounded-lg border border-teal-200 bg-white px-4 py-2.5 text-base font-normal text-ink-950 focus:border-teal-500 focus:outline-none"
      >
        <option value="" disabled>
          Select one
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

export function TextAreaField({
  label,
  name,
  required = false,
  placeholder,
  hideLabel = false,
  rows = 4,
}: {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  hideLabel?: boolean;
  rows?: number;
}) {
  return (
    <label className="flex flex-col gap-1.5 text-sm font-medium text-ink-900">
      <span className={hideLabel ? "sr-only" : undefined}>{label}</span>
      <textarea
        name={name}
        required={required}
        placeholder={placeholder ?? label}
        rows={rows}
        className="rounded-lg border border-teal-200 bg-white px-4 py-2.5 text-base font-normal text-ink-950 placeholder:text-ink-300 focus:border-teal-500 focus:outline-none"
      />
    </label>
  );
}

export function CheckboxField({
  label,
  name,
  required = true,
}: {
  label: ReactNode;
  name: string;
  required?: boolean;
}) {
  return (
    <label className="flex items-start gap-2.5 text-sm text-ink-700">
      <input
        type="checkbox"
        name={name}
        required={required}
        className="mt-1 h-4 w-4 shrink-0 rounded border-teal-300 text-teal-600 focus:ring-teal-500"
      />
      <span>{label}</span>
    </label>
  );
}
