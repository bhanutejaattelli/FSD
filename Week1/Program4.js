const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function Student(name, grade) {
  this.name = name;
  this.grade = grade;
    this.study = function () {
    console.log(`${this.name} is studying hard!`);
  };
  this.getGrade = function () {
    return `${this.name}'s current grade is ${this.grade}.`;
  };
}

const students = [];
function createStudent() {
  rl.question("Enter the student's name: ", (name) => {
    rl.question("Enter the student's grade: ", (grade) => {
      const student = new Student(name, grade);
      students.push(student);

      student.study();
      console.log(student.getGrade());
      rl.question("Do you want to add another student? (yes/no): ", (answer) => {
        if (answer.toLowerCase() === "yes") {
          createStudent(); 
        } else {
          console.log("\nFinal List of Students:");
          students.forEach((s, index) => {
            console.log(`${index + 1}. ${s.name} - Grade: ${s.grade}`);
          });
          rl.close(); 
        }
      });
    });
  });
}

createStudent();
