import caesarCipher from "../src/caesar_cipher";

test('shift 1', () => {
  expect(caesarCipher('aaa', 1)).toBe('bbb');
});

test('wrapping', () => {
  expect(caesarCipher('zzz', 1)).toBe('aaa');
});
