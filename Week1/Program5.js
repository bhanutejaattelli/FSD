const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const temperatureConverter = {
  toCelsius: function (fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  },
  toFahrenheit: function (celsius) {
    return (celsius * 9) / 5 + 32;
  },
};
function startTemperatureConversion() {
  rl.question(
    "Enter 'C' to convert Celsius to Fahrenheit, or 'F' to convert Fahrenheit to Celsius: ",
    (choice) => {
      if (choice.toUpperCase() === 'C') {
        rl.question('Enter the temperature in Celsius: ', (celsius) => {
          const fahrenheit = temperatureConverter.toFahrenheit(parseFloat(celsius));
          console.log(`${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`);
          rl.close();
        });
      } else if (choice.toUpperCase() === 'F') {
        rl.question('Enter the temperature in Fahrenheit: ', (fahrenheit) => {
          const celsius = temperatureConverter.toCelsius(parseFloat(fahrenheit));
          console.log(`${fahrenheit}°F is equal to ${celsius.toFixed(2)}°C`);
          rl.close();
        });
      } else {
        console.log('Invalid choice! Please enter "C" or "F".');
        rl.close();
      }
    }
  );
}

startTemperatureConversion();
