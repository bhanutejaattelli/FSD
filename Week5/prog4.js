const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

myEmitter.once('greet', (name, age) => {
    console.log(`Hello, ${name}! You are ${age} years old.`);
});

myEmitter.emit('greet', 'Bhanu', 21); 
myEmitter.emit('greet', 'Alice', 30); 
myEmitter.emit('greet', 'Bob', 25);   
