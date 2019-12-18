import reverseString from "../src/reverse_string";

test("reverses 'Word' to 'droW'", () => {
  expect(reverseString("Word")) .toMatch("droW");
});