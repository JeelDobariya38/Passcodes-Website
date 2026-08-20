"use client";

import { usePathname } from "next/navigation";
import { NAV_ROUTES } from "@/lib/constants";

/**
 * Determines the currently active navigation item.
 */
export function useActiveNav() {
    const pathname = usePathname();

    const isActive = (href: string): boolean => {
        if (href === "/") {
            return pathname === "/";
        }
        return pathname.startsWith(href);
    };

    const activeRoute = NAV_ROUTES.find((route) => isActive(route.href));

    return { isActive, activeRoute, pathname };
}
