"use client";

import {
    forwardRef,
    useEffect,
    useRef,
    type ReactNode,
    type DialogHTMLAttributes,
} from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface DialogProps extends DialogHTMLAttributes<HTMLDialogElement> {
    open: boolean;
    onClose: () => void;
    children: ReactNode;
    showCloseButton?: boolean;
    className?: string;
}

export const Dialog = forwardRef<HTMLDialogElement, DialogProps>(
    (
        {
            open,
            onClose,
            children,
            showCloseButton = true,
            className,
            ...props
        },
        ref
    ) => {
        const dialogRef = useRef<HTMLDialogElement | null>(null);

        // Sync React `open` <-> native showModal/close
        useEffect(() => {
            const dialog = dialogRef.current;
            if (!dialog) return;
            if (open && !dialog.open) dialog.showModal();
            else if (!open && dialog.open) dialog.close();
        }, [open]);

        // Native close (Esc) -> React state
        useEffect(() => {
            const dialog = dialogRef.current;
            if (!dialog) return;
            const handleClose = () => onClose();
            dialog.addEventListener("close", handleClose);
            return () => dialog.removeEventListener("close", handleClose);
        }, [onClose]);

        // Click on the backdrop closes. A click on ::backdrop dispatches to the dialog
        // element with coordinates outside its content rect (native dialogs do NOT do
        // this on their own — hence the missing "click outside" behaviour).
        useEffect(() => {
            const dialog = dialogRef.current;
            if (!dialog || !open) return;
            const onClick = (e: MouseEvent) => {
                const r = dialog.getBoundingClientRect();
                const outside =
                    e.clientX < r.left ||
                    e.clientX > r.right ||
                    e.clientY < r.top ||
                    e.clientY > r.bottom;
                if (outside) onClose();
            };
            dialog.addEventListener("click", onClick);
            return () => dialog.removeEventListener("click", onClick);
        }, [open, onClose]);

        // Explicit Escape -> close immediately (belt-and-braces over the native path,
        // so the close can never feel delayed). No preventDefault: native still runs.
        useEffect(() => {
            const dialog = dialogRef.current;
            if (!dialog || !open) return;
            const onKey = (e: KeyboardEvent) => {
                if (e.key === "Escape") onClose();
            };
            dialog.addEventListener("keydown", onKey);
            return () => dialog.removeEventListener("keydown", onKey);
        }, [open, onClose]);

        return (
            <dialog
                ref={(node) => {
                    dialogRef.current = node;
                    if (typeof ref === "function") ref(node);
                    else if (ref) ref.current = node;
                }}
                className={cn(className)}
                aria-modal="true"
                {...props}
            >
                {showCloseButton && (
                    <button
                        type="button"
                        onClick={onClose}
                        className="dialog-close"
                        aria-label="Close dialog"
                    >
                        <X className="h-5 w-5" aria-hidden="true" />
                    </button>
                )}
                {children}
            </dialog>
        );
    }
);
Dialog.displayName = "Dialog";
