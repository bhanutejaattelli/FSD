const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
Car.prototype.getDetails = function() {
  return `Car Details: ${this.year} ${this.make} ${this.model}`;
};

function ElectricCar(make, model, year, batteryCapacity) {
  Car.call(this, make, model, year); 
  this.batteryCapacity = batteryCapacity; 
}
ElectricCar.prototype = Object.create(Car.prototype);
ElectricCar.prototype.constructor = ElectricCar;
ElectricCar.prototype.getBatteryInfo = function() {
  return `Battery Capacity: ${this.batteryCapacity} kWh`;
};
function getUserInput() {
  rl.question("Enter car type (regular/electric): ", (carType) => {
    if (carType.toLowerCase() === "electric") {
      rl.question("Enter the car's make: ", (make) => {
        rl.question("Enter the car's model: ", (model) => {
          rl.question("Enter the car's year: ", (year) => {
            rl.question("Enter the car's battery capacity (in kWh): ", (batteryCapacity) => {
              const electricCar = new ElectricCar(make, model, parseInt(year), parseInt(batteryCapacity));
              console.log(electricCar.getDetails());   
              console.log(electricCar.getBatteryInfo()); 

              rl.close();
            });
          });
        });
      });
    } else if (carType.toLowerCase() === "regular") {
      rl.question("Enter the car's make: ", (make) => {
        rl.question("Enter the car's model: ", (model) => {
          rl.question("Enter the car's year: ", (year) => {
            const car = new Car(make, model, parseInt(year));

            console.log(car.getDetails());  
            rl.close();
          });
        });
      });
    } else {
      console.log("Invalid car type! Please enter either 'regular' or 'electric'.");
      rl.close();
    }
  });
}

getUserInput();
