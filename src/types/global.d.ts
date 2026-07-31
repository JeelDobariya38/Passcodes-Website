// Ambient module declarations for non-JS assets.
// Next.js resolves these at build time; TypeScript needs these declarations
// so that side-effect imports like `import '@/styles/globals.css'` type-check.

declare module '*.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}