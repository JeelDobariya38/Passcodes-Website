import { AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ErrorStateProps {
    message?: string;
    onRetry?: () => void;
}

export function ErrorState({
    message = "Something went wrong while loading this content.",
    onRetry,
}: ErrorStateProps) {
    return (
        <div
            className="card mx-auto flex max-w-xl flex-col items-center gap-4 p-6 text-center"
            role="alert"
        >
            <AlertCircle
                className="h-8 w-8 text-[var(--tag-alpha)]"
                aria-hidden="true"
            />

            <div>
                <h2 className="text-lg font-semibold text-[var(--text)]">
                    Unable to load content
                </h2>

                <p className="mt-1 text-sm text-[var(--text-muted)]">
                    {message}
                </p>
            </div>

            {onRetry && (
                <Button type="button" variant="secondary" onClick={onRetry}>
                    <RefreshCw className="h-4 w-4" aria-hidden="true" />
                    Try again
                </Button>
            )}
        </div>
    );
}
