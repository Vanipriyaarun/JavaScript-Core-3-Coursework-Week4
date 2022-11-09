let convertToOldRoman = require("./convert-to-old-roman");

test("returns I if passed 1 as an argument", function () {
  let n=2658;
  let expected='MMDCLVIII';

  let n1=567;
  let expected1='DLXVII'

  let output=convertToOldRoman(n);
  let output1=convertToOldRoman(n1);

  expect(output).toEqual(expected);
  expect(output1).toEqual(expected1);
  // Arrange
  // Act
  // Assert
});
