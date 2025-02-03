function fun1(callback) {
    setTimeout(() => {
        console.log("function 1 completed");
        callback();
    }, 1000);
}

function fun2(callback) {
    setTimeout(() => {
        console.log("function 2 completed");
        callback();
    }, 1000);
}

function fun3(callback) {
    setTimeout(() => {
        console.log("function 3 completed");
        callback();
    }, 1000);
}

// Callback Hell
fun1(() => {
    fun2(() => {
        fun3(() => {
            console.log("All steps completed!");
        });
    });
});
