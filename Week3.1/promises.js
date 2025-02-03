function fun1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("function 1 completed");
            resolve();
        }, 1000);
    });
}

function fun2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("function 2 completed");
            resolve();
        }, 1000);
    });
}

function fun3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("function 3 completed");
            resolve();
        }, 1000);
    });
}

// Using Promises
fun1()
    .then(() => fun2())
    .then(() => fun3())
    .then(() => console.log("All steps completed using Promise"));
