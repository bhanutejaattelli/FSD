const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function createProfile({ name, email }) {
  return { name, email };
}

rl.question("Enter your name: ", (name) => {
  rl.question("Enter your age: ", (age) => {
    rl.question("Enter your email: ", (email) => {
      rl.question("Enter your address: ", (address) => {

        const userInput = { name, age, email, address };

        const profile = createProfile(userInput);

        console.log("Profile created:", profile);

        rl.close();
      });
    });
  });
});
