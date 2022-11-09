function add(numbers) {
let arr=numbers.split(",").map(x=>Number(x));
if(arr.some(x=>x<0)){
    throw new Error(`negatives not allowed: ${arr.filter(x=>x<0)}`);
}else{
return arr.filter(x=>x<=1000).reduce((a,b)=>a+b,0)
}
}
module.exports = add;