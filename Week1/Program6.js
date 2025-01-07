const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.describe = function() {
    return `Name: ${this.name}, Age: ${this.age}`;
  };
}

function Student(name, age, grade) {
  Person.call(this, name, age);   
  this.grade = grade;
  this.study = function() {
    return `${this.name} is studying for grade ${this.grade}.`;
  };
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

function getUserInput() {
  rl.question("Enter the student's name: ", (name) => {
    rl.question("Enter the student's age: ", (age) => {
      rl.question("Enter the student's grade: ", (grade) => {
        const student = new Student(name, parseInt(age), grade);
        console.log(student.describe());  
        console.log(student.study());     

        rl.close();
      });
    });
  });
}

// Start the program
getUserInput();
