const globalSymbol1 = Symbol.for('myGlobalSymbol');
const globalSymbol2 = Symbol.for('myGlobalSymbol');

console.log(globalSymbol1 === globalSymbol2); 

console.log(Symbol.keyFor(globalSymbol1)); 
console.log(Symbol.keyFor(globalSymbol2));

const symbol1 = Symbol('description');
const symbol2 = Symbol('description');

console.log(symbol1 === symbol2); 

console.log(globalSymbol1 === globalSymbol2); 
