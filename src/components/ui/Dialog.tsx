'use client';

import {
  forwardRef,
  useEffect,
  useRef,
  type ReactNode,
  type DialogHTMLAttributes,
} from 'react';
import { cn } from '@/lib/utils';

interface DialogProps extends DialogHTMLAttributes<HTMLDialogElement> {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

export const Dialog = forwardRef<HTMLDialogElement, DialogProps>(
  ({ open, onClose, children, className, ...props }, ref) => {
    const dialogRef = useRef<HTMLDialogElement | null>(null);

    useEffect(() => {
      const dialog = dialogRef.current;
      if (!dialog) return;
      if (open && !dialog.open) dialog.showModal();
      else if (!open && dialog.open) dialog.close();
    }, [open]);

    useEffect(() => {
      const dialog = dialogRef.current;
      if (!dialog) return;
      const handleClose = () => onClose();
      dialog.addEventListener('close', handleClose);
      return () => dialog.removeEventListener('close', handleClose);
    }, [onClose]);

    return (
      <dialog
        ref={(node) => {
          dialogRef.current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
        }}
        className={cn(className)}
        aria-modal="true"
        {...props}
      >
        {children}
      </dialog>
    );
  }
);
Dialog.displayName = 'Dialog';
