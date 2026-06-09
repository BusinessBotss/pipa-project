import React from 'react';
import Link from 'next/link';

interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  /** External links open in a new tab with safe rel. Auto-detected for http(s). */
  external?: boolean;
  children: React.ReactNode;
  className?: string;
}

const baseClasses = `
  inline-flex items-center justify-center
  rounded-full px-6 py-3 text-sm tracking-wide
  bg-white/[0.03] border border-white/10
  backdrop-blur-xl shadow-2xl shadow-black/30
  text-sand transition-all duration-300
  hover:bg-white/[0.08] hover:border-amber-300/40 hover:text-amber-200 hover:scale-[1.02]
`;

export function GlassButton({ href, external, children, className = '', ...props }: GlassButtonProps) {
  const classes = `${baseClasses} ${className}`;

  if (href) {
    const isExternal = external ?? /^https?:\/\//.test(href);
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
