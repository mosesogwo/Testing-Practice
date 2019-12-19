/* eslint-env jest */

import capitalize from '../src/capitalize';

test("capitalize 'word' to 'Word'", () => {
  expect(capitalize('word')).toMatch('Word');
});
