import React from 'react';

interface LuxuryCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
}

export function LuxuryCard({ children, className = '', interactive = false, ...props }: LuxuryCardProps) {
  const interactiveClasses = interactive
    ? 'transition-all duration-300 hover:border-amber-300/40 hover:bg-white/[0.04] hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40 cursor-pointer'
    : '';

  return (
    <div
      className={`
        overflow-hidden rounded-2xl
        bg-card border border-white/10
        shadow-xl shadow-black/20
        ${interactiveClasses}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}
