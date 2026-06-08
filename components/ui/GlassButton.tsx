import React from 'react';
import Link from 'next/link';

interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export function GlassButton({ href, children, className = '', ...props }: GlassButtonProps) {
  const baseClasses = `
    inline-flex items-center justify-center
    rounded-full px-6 py-3 text-sm tracking-wide
    bg-white/[0.03] border border-white/10
    backdrop-blur-xl shadow-2xl shadow-black/30
    text-sand transition-all duration-300
    hover:bg-white/[0.08] hover:border-amber-300/40 hover:text-amber-200 hover:scale-[1.02]
    ${className}
  `;

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {children}
    </button>
  );
}
