// Ambient module declarations for non-JS assets.
// Next.js resolves these at build time; TypeScript needs these declarations
// so that side-effect imports like `import '@/styles/globals.css'` type-check.

declare module "*.css" {
    const classes: { readonly [key: string]: string };
    export default classes;
}

/* User-Agent Client Hints (best-effort arch detection). Not in lib.dom for our TS target. */
interface UADataValues {
    architecture?: string;
    bitness?: string;
    platform?: string;
    model?: string;
    uaFullVersion?: string;
}
interface NavigatorUAData {
    getHighEntropyValues(hints: string[]): Promise<UADataValues>;
    toJSON(): UADataValues;
}
interface Navigator {
    userAgentData?: NavigatorUAData;
}
