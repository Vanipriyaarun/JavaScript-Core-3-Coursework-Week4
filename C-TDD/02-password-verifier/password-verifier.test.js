let verifyPassword = require("./password-verifier");

test("verify given password is valid", function () {
  let password="dvyyeyy!5";
  let expected='Password rejected';

  let password1="tryT3729";
  let expected1='Password accepted';

  let password2=null;
  let expected2='Password rejected';

  let password3="Se%5";
  let expected3='Password rejected';

  let password4="Pleruhnty!";
  let expected4='Password rejected';

  let output=verifyPassword(password);
  let output1=verifyPassword(password1);
  let output2=verifyPassword(password2);
  let output3=verifyPassword(password3);
  let output4=verifyPassword(password4);

  expect(output).toEqual(expected);
  expect(output1).toEqual(expected1);
  expect(output2).toEqual(expected2);
  expect(output3).toEqual(expected3);
  expect(output4).toEqual(expected4);
  
});