import { range } from './range';

export const chunk = <T>(array: T[], size: number): T[][] => {
   return range(Math.ceil(array.length / size)).map((_, i) =>
      array.slice(i * size, (i + 1) * size),
   );
};
