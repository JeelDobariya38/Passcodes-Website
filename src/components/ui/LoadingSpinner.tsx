import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  className?: string;
  label?: string;
}

export function LoadingSpinner({
  className,
  label = 'Loading...',
}: LoadingSpinnerProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-3 py-12',
        className
      )}
      role="status"
      aria-live="polite"
    >
      <div
        className="h-9 w-9 animate-spin rounded-full border-2 border-[var(--border-light)] border-t-[var(--accent-light)]"
        aria-hidden="true"
      />
      <span className="text-sm text-[var(--text-muted)]">{label}</span>
    </div>
  );
}
