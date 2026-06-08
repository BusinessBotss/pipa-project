'use client';

import { useRef, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Link from 'next/link';
import { usePrefersReducedMotion, useIsTouch } from '@/lib/useReducedMotion';
import { cn } from '@/lib/cn';

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'gold' | 'ghost' | 'whatsapp';
  type?: 'button' | 'submit';
  disabled?: boolean;
  'aria-label'?: string;
};

const variants: Record<string, string> = {
  gold: 'bg-gold text-black hover:brightness-110',
  ghost: 'border border-line-strong text-text hover:bg-card-2',
  whatsapp: 'bg-whatsapp text-black hover:brightness-105',
};

/** Magnetic CTA. Magnetism disabled on touch / reduced motion / disabled. */
export function MagneticButton({
  children,
  href,
  onClick,
  className,
  variant = 'gold',
  type = 'button',
  disabled,
  ...rest
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const touch = useIsTouch();
  const active = !reduced && !touch && !disabled;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  function handleMove(e: React.MouseEvent) {
    if (!active || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.25);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.25);
  }
  function reset() {
    x.set(0);
    y.set(0);
  }

  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition disabled:opacity-50 disabled:cursor-not-allowed',
    variants[variant],
    className,
  );

  const inner = href ? (
    <Link href={href} className={classes} aria-label={rest['aria-label']}>
      {children}
    </Link>
  ) : (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={rest['aria-label']}
    >
      {children}
    </button>
  );

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={active ? { x: sx, y: sy } : undefined}
      className="inline-block"
      role="presentation"
    >
      {inner}
    </motion.div>
  );
}
