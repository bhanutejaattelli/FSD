function calculate(operation, a, b) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}
f
function multiply(x, y) {
    return x * y;
}

console.log(calculate(add, 5, 3));      
console.log(calculate(multiply, 5, 3)); 
