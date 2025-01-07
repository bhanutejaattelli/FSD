const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function Person(name, age) {
  this.name = name;
  this.age = age;

  this.greet = function () {
    console.log(`Hello, my name is ${this.name}!`);
  };

  this.isAdult = function () {
    return this.age >= 18 ? "I am an adult." : "I am not an adult.";
  };
}

rl.question("Enter your name: ", (name) => {
  rl.question("Enter your age: ", (age) => {
    age = parseInt(age, 10);

    const person = new Person(name, age);

    person.greet();
    console.log(`Age: ${person.age}`);
    console.log(person.isAdult());

    rl.close();
  });
});
