import React from 'react';
import Link from 'next/link';

interface PremiumButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export function PremiumButton({ href, children, className = '', ...props }: PremiumButtonProps) {
  const baseClasses = `
    inline-flex items-center justify-center
    rounded-full px-6 py-3 text-sm font-medium tracking-wide
    bg-gold text-black border border-transparent
    shadow-lg shadow-gold/20 transition-all duration-300
    hover:brightness-110 hover:shadow-gold/40 hover:scale-[1.02]
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
