class Animal {
    speak() {
      console.log("This is a generic animal sound.");
    }
  }
  
  class Dog extends Animal {
    speak() {
      console.log("Woof!");
    }
  }
  
  const genericAnimal = new Animal();
  const dog = new Dog();
  
  genericAnimal.speak(); 
  dog.speak(); 
  