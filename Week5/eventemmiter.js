const EventEmitter = require('events'); 

class MyEmitter extends EventEmitter {} 
const myEmitter = new MyEmitter(); 

myEmitter.on('greet', (name, age) => {
    console.log(`Hello, ${name}! You are ${age} years old.`);
});

myEmitter.emit('greet', 'Bhanu', 21);
