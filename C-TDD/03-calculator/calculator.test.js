let add = require("./calculator");
test("add numbers in string", function () {
  let numbers="";
  let expected=0;

  let numbers1="1";
  let expected1=1;

  let numbers2="1,9";
  let expected2=10;

  let numbers3="1,5,9,4,6,9,6";
  let expected3=40;

  let numbers4="2,1001";
  let expected4=2;

  let output=add(numbers);
  let output1=add(numbers1);
  let output2=add(numbers2);
  let output3=add(numbers3);
  let output4=add(numbers4);

  expect(output).toEqual(expected);
  expect(output1).toEqual(expected1);
  expect(output2).toEqual(expected2);
  expect(output3).toEqual(expected3);
  expect(output4).toEqual(expected4);
  
});

test("throw an error for negative numbers", function () {
    function negativeNum() {
    add("1,4,-1");
  }
  expect(negativeNum).toThrow(Error);
});