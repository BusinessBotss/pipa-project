'use client';

import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '@/lib/useReducedMotion';
import { cn } from '@/lib/cn';

/** Blur-in headline. Falls back to plain text under reduced motion. Always
 *  exposes the full text via aria-label. Not for long paragraphs. */
export function BlurText({
  text,
  className,
  as: Tag = 'h1',
}: {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'p';
}) {
  const reduced = usePrefersReducedMotion();
  const words = text.split(' ');

  if (reduced) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={cn(className)} aria-label={text}>
      <span aria-hidden="true">
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="inline-block"
            initial={{ filter: 'blur(8px)', opacity: 0, y: 8 }}
            animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            {word}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        ))}
      </span>
    </Tag>
  );
}
