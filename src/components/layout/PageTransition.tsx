"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/** Keys the page subtree by route so the CSS enter animation plays on every nav. */
export function PageTransition({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    return (
        <div key={pathname} className="page-enter">
            {children}
        </div>
    );
}
