'use client';

import { cn } from '@/lib/cn';

/** Accessible switch (role=switch, keyboard, aria-checked). */
export function AnimatedToggle({
  checked,
  onChange,
  label,
  id,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
  id: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <label htmlFor={id} className="text-sm text-muted">
        {label}
      </label>
      <button
        id={id}
        role="switch"
        aria-checked={checked}
        aria-label={label}
        onClick={() => onChange(!checked)}
        className={cn(
          'relative h-7 w-12 rounded-full border border-line-strong transition-colors',
          checked ? 'bg-gold' : 'bg-card-2',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'absolute top-1 h-5 w-5 rounded-full bg-bg transition-transform',
            checked ? 'translate-x-6' : 'translate-x-1',
          )}
        />
      </button>
    </div>
  );
}
