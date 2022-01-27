import { chunk } from './chunk';

describe(__filename, () => {
   test('chunk', () => {
      const samples: [number[], number, number[][]][] = [
         [[], 0, []],
         [[], 2, []],
         [[1, 2, 3], 0, []],
         [[1, 2, 3], 1, [[1], [2], [3]]],
         [[1, 2, 3], 2, [[1, 2], [3]]],
         [[1, 2, 3], 3, [[1, 2, 3]]],
      ];

      samples.forEach(([input, size, output]) => {
         expect(chunk(input, size)).toStrictEqual(output);
      });
   });
});
