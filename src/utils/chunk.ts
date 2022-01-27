import { range } from './range';

export const chunk = <T>(array: T[], size: number): T[][] => {
   if (size === 0) {
      return [];
   }

   return range(Math.ceil(array.length / size)).map((_, i) =>
      array.slice(i * size, (i + 1) * size),
   );
};
