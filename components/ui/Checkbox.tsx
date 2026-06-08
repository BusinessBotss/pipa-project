'use client';

import { cn } from '@/lib/cn';

/** Accessible checkbox bound to a visible label. */
export function Checkbox({
  id,
  label,
  checked,
  onChange,
  required,
}: {
  id: string;
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
  required?: boolean;
}) {
  return (
    <label htmlFor={id} className="flex cursor-pointer items-start gap-3 text-sm">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        required={required}
        onChange={(e) => onChange(e.target.checked)}
        className={cn(
          'mt-0.5 h-5 w-5 shrink-0 rounded border-line-strong bg-card text-gold',
          'focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold',
        )}
      />
      <span className="text-muted">{label}</span>
    </label>
  );
}
