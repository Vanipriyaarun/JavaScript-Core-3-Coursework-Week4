let convertToNewRoman = require("./convert-to-new-roman");

test("returns I if passed 1 as an argument", function () {
  let n=944;
  let expected='CMXLIV';

  let n1=44;
  let expected1='XLIV'

  let output=convertToNewRoman(n);
  let output1=convertToNewRoman(n1);

  expect(output).toEqual(expected);
  expect(output1).toEqual(expected1);
  // Arrange
  // Act
  // Assert
});
