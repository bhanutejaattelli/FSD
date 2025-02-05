//using module
const math=require(`./ModulesExports`);

console.log("using module");
console.log(math.add(5,7));
console.log(math.mul(3,6));

//using exports

// const mathematics=require(`./ModulesExports`)

console.log("using exports");
console.log(math.addition(5,6));
console.log(math.multiplication(3,8));

//using classes
console.log("using classes");

const persons=new person('bhanu',21);
console.log(persons.introduce());