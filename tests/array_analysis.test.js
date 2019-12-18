import arrayAnalysis from '../src/array_analysis';

test("analysis of [2, 10, 12, 5, 6] should return {  average: 7, min: 2, max: 12, length: 5 }", () => {
  expect(arrayAnalysis([2, 10, 12, 5, 6])).toEqual({ average: 7, min: 2, max: 12, length: 5 })
});