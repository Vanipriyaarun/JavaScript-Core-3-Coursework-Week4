let getLargestNumber = require("./largest-number");

test("returns largest number in array", function () {
  let array=[3, 21, 88, 4, 36];
  let expected= 88;

  let output=getLargestNumber(array);

  expect(output).toEqual(expected);
  // Arrange
  // Act
  // Assert
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
