function convertToNewRoman(n) {
  let romanNumeral=['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
  let arabicNumber=[1000,900,500,400,100,90,50,40,10,9,5,4,1];
  let result=[];
  for(let i=0; i<13; i++){
    let quotient=Math.floor(n/arabicNumber[i]);
    n=n%arabicNumber[i];
    for(let  j=0; j<quotient; j++){
      result.push(romanNumeral[i]);
    }
  }
  return result.join("");
}

module.exports = convertToNewRoman;
