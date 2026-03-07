// Type declarations for CSS side-effect imports in Next.js
declare module "*.css" {
  const content: string;
  export default content;
}

