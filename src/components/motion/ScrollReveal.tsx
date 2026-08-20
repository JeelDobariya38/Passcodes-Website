"use client";

import {
    useEffect,
    useRef,
    useState,
    type ReactNode,
    type ElementType,
    type CSSProperties,
} from "react";

export interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    distance?: number;
    threshold?: number;
    scale?: boolean | number;
    as?: ElementType;
    style?: CSSProperties;
    once?: boolean;
}

/**
 * Tier 3 Scroll Reveal Component.
 * Restrained, subtle page-content reveal (default: opacity 0 -> 1, translateY 16px -> 0, scale 0.99 -> 1).
 * Respects prefers-reduced-motion unconditionally.
 */
export function ScrollReveal({
    children,
    className = "",
    delay = 0,
    duration = 550,
    direction = "up",
    distance = 16,
    threshold = 0.1,
    scale = true,
    as: Component = "div",
    style = {},
    once = true,
}: ScrollRevealProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const elementRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        setIsMounted(true);

        // Respect prefers-reduced-motion
        const prefersReduced =
            typeof window !== "undefined" &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (prefersReduced) {
            setIsVisible(true);
            return;
        }

        const el = elementRef.current;
        if (!el) return;

        // Capped delay on mobile viewports (<640px) to keep scrolling crisp
        const effectiveDelay =
            typeof window !== "undefined" && window.innerWidth < 640
                ? Math.min(delay, 120)
                : delay;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    if (effectiveDelay > 0) {
                        const timer = setTimeout(() => {
                            setIsVisible(true);
                        }, effectiveDelay);
                        if (once) observer.unobserve(el);
                        return () => clearTimeout(timer);
                    } else {
                        setIsVisible(true);
                        if (once) observer.unobserve(el);
                    }
                } else if (!once) {
                    setIsVisible(false);
                }
            },
            {
                threshold,
                rootMargin: "0px 0px -30px 0px",
            }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold, once, delay]);

    // Initial transform calculations (Tier 3 standards)
    let initialTransform = "";
    if (isMounted && !isVisible) {
        let translateX = 0;
        let translateY = 0;

        if (direction === "up") translateY = distance;
        else if (direction === "down") translateY = -distance;
        else if (direction === "left") translateX = distance;
        else if (direction === "right") translateX = -distance;

        const scaleVal = typeof scale === "number" ? scale : scale ? 0.99 : 1;

        initialTransform = `translate3d(${translateX}px, ${translateY}px, 0) scale(${scaleVal})`;
    } else {
        initialTransform = "translate3d(0, 0, 0) scale(1)";
    }

    return (
        <Component
            ref={elementRef}
            className={className}
            style={{
                ...style,
                opacity: !isMounted || isVisible ? 1 : 0,
                transform: initialTransform,
                transitionProperty: "opacity, transform",
                transitionDuration: `${duration}ms`,
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                willChange:
                    isMounted && !isVisible ? "opacity, transform" : "auto",
            }}
        >
            {children}
        </Component>
    );
}
