const symbol1 = Symbol('description');
const symbol2 = Symbol('description');
const obj = {
  [symbol1]: 'This is the first value.',
  [symbol2]: 'This is the second value.',
};

console.log(obj[symbol1]); 
console.log(obj[symbol2]); 

console.log(symbol1 === symbol2); 
