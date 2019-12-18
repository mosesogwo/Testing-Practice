import caesarCipher from "../src/caesar_cipher";

test('shifting 1', () => {
  expect(caesarCipher('aaa', 1)).toBe('bbb');
});

test('wrapping', () => {
  expect(caesarCipher('zzz', 1)).toBe('aaa');
});

test('case sensitivity', () => {
  expect(caesarCipher('Daniel', 1)).toBe('Ebojfm');
});

test('reserves punctuation', () => {
  expect(caesarCipher('Moses!', 20)).toBe('Gimym!');
});
