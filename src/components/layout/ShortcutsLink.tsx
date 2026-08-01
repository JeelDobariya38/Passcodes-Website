"use client";

export function ShortcutsLink() {
    return (
        <button
            type="button"
            onClick={() =>
                window.dispatchEvent(
                    new CustomEvent("passcodes:open-shortcuts")
                )
            }
            className="text-sm text-[var(--footer-muted)] transition-colors hover:text-white"
        >
            ⌨ Shortcuts
        </button>
    );
}
