import { Users } from "lucide-react";

interface EmptyStateProps {
    title?: string;
    message?: string;
}

export function EmptyState({
    title = "No contributors found",
    message = "There are no contributors to display right now.",
}: EmptyStateProps) {
    return (
        <div
            className="card mx-auto flex max-w-xl flex-col items-center gap-4 p-6 text-center"
            role="status"
        >
            <Users
                className="h-8 w-8 text-[var(--accent-light)]"
                aria-hidden="true"
            />

            <div>
                <h2 className="text-lg font-semibold text-[var(--text)]">
                    {title}
                </h2>

                <p className="mt-1 text-sm text-[var(--text-muted)]">
                    {message}
                </p>
            </div>
        </div>
    );
}
