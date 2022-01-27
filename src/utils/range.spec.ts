import { range } from './range';

describe(__filename, () => {
   test('range', () => {
      const samples: [number, number[]][] = [
         [0, []],
         [1, [0]],
         [5, [0, 1, 2, 3, 4]],
      ];

      samples.forEach(([input, output]) => {
         expect(range(input)).toStrictEqual(output);
      });
   });
});
