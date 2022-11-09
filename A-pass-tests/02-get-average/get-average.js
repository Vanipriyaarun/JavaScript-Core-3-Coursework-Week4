// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
  let numArr=numbers.filter(x=>typeof(x)==='number');
  return numArr.reduce((a,b)=>a+b,0)/numArr.length

}

module.exports = average;
