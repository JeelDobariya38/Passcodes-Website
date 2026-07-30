'use client';

import { AlertTriangle, X } from 'lucide-react';
import { useDeviceWarning } from '@/hooks/useDeviceWarning';

export function DeviceWarning() {
  const { showWarning, dismiss } = useDeviceWarning();
  if (!showWarning) return null;

  return (
    <div
      className="alert-info mb-8 flex animate-fade-in items-start gap-3 rounded-2xl p-4"
      role="alert"
      aria-live="polite"
    >
      <AlertTriangle
        className="mt-0.5 h-5 w-5 shrink-0"
        style={{ color: 'var(--accent-light)' }}
        aria-hidden="true"
      />
      <div className="flex-1">
        <p className="text-sm font-semibold">
          Passcodes is designed for Android
        </p>
        <p className="mt-1 text-sm text-[var(--text-muted)]">
          It looks like you&apos;re not on an Android device. You can still
          browse releases and download the APK, but it won&apos;t run on your
          current device.
        </p>
      </div>
      <button
        type="button"
        onClick={dismiss}
        className="shrink-0 rounded-md p-1 text-[var(--text-muted)] hover:text-[var(--text)]"
        aria-label="Dismiss warning"
      >
        <X className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  );
}
