const data = [{name: 'John', age: 30}, {name: 'Jane', age: 25}];

const [first,...rest] = data;

console.log(first);
console.log(first.name); 
console.log(first.age);  
