"use client";

import { useState, useEffect } from "react";
import { isNonAndroidDevice } from "@/lib/utils";

/**
 * Detects if the user is on a non-Android device.
 * Shows a compatibility warning only on the downloads page.
 */
export function useDeviceWarning() {
    const [showWarning, setShowWarning] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    useEffect(() => {
        if (isNonAndroidDevice()) {
            setShowWarning(true);
        }
    }, []);

    const dismiss = () => {
        setIsDismissed(true);
        setShowWarning(false);
    };

    return {
        showWarning: showWarning && !isDismissed,
        dismiss,
    };
}
