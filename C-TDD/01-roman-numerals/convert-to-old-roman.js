function convertToOldRoman(n) {
  let romanNumeral=['M','D','C','L','X','V','I'];
  let arabicNumber=[1000,500,100,50,10,5,1];
  let result=[];
  for(let i=0; i<7; i++){
    let quotient=Math.floor(n/arabicNumber[i]);
    n=n%arabicNumber[i];
    for(let  j=0; j<quotient; j++){
      result.push(romanNumeral[i]);
    }
  }
  return result.join("");
}

module.exports = convertToOldRoman;
