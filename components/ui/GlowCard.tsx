'use client';

import { useRef, type ReactNode } from 'react';
import { usePrefersReducedMotion } from '@/lib/useReducedMotion';
import { cn } from '@/lib/cn';

/** Cursor-following glow card. Glow overlay is decorative (aria-hidden,
 *  pointer-events none). Tracking disabled under reduced motion. */
export function GlowCard({
  children,
  className,
  hue = 38,
}: {
  children: ReactNode;
  className?: string;
  hue?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  function onMove(e: React.MouseEvent) {
    if (reduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty('--mx', `${e.clientX - r.left}px`);
    ref.current.style.setProperty('--my', `${e.clientY - r.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-line bg-card',
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(280px circle at var(--mx, 50%) var(--my, 50%), hsla(${hue}, 60%, 60%, 0.18), transparent 70%)`,
        }}
      />
      {children}
    </div>
  );
}
