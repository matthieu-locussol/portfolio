export {};

// Note: temporary workaround while waiting for Vercel to fix this Next.js-related issue
declare global {
   type StaticImageData = {
      src: string;
      height: number;
      width: number;
      blurDataURL?: string;
   };

   declare module '*.png';
   declare module '*.jpg';
   declare module '*.jpeg';
}
