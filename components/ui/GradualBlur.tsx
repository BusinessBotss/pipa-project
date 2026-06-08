import { cn } from '@/lib/cn';

/** Decorative bottom/top fade. aria-hidden, pointer-events none.
 *  Falls back gracefully where backdrop-filter is unsupported. */
export function GradualBlur({
  position = 'bottom',
  className,
}: {
  position?: 'bottom' | 'top';
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute inset-x-0 h-24 z-10',
        position === 'bottom'
          ? 'bottom-0 bg-gradient-to-t from-bg to-transparent'
          : 'top-0 bg-gradient-to-b from-bg to-transparent',
        className,
      )}
      style={{
        backdropFilter: 'blur(2px)',
        WebkitMaskImage:
          position === 'bottom'
            ? 'linear-gradient(to top, black, transparent)'
            : 'linear-gradient(to bottom, black, transparent)',
      }}
    />
  );
}
