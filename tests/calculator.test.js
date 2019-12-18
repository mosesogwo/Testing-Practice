/* eslint-env jest */

import calculator from '../src/calculator';

test('add (10, 5) = 15', () => {
  expect(calculator.add(10, 5)).toBe(15);
});

test('subtract (10, 5) = 5', () => {
  expect(calculator.subtract(10, 5)).toBe(5);
});

test('multiply (10, 5) = 50', () => {
  expect(calculator.multiply(10, 5)).toBe(50);
});

test('divide (10, 5) = 2', () => {
  expect(calculator.divide(10, 5)).toBe(2);
});
