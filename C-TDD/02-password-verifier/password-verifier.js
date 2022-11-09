
function verifyPassword(password) {
if(password===null){
    return 'Password rejected';
}else if(password.length>=8 && containsUppercaseLetter(password) && containsNumber(password)){
    return 'Password accepted';
}else{
   return 'Password rejected';
}
}

// Returns true if string contains at least one uppercase letter.
function containsUppercaseLetter(string) {
  return /[A-Z]/.test(string);
}

// Returns true if string contains at least one number.
function containsNumber(string) {
  return /[0-9]/.test(string);
}
module.exports = verifyPassword;