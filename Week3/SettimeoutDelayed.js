function delayedMessage(message,delay,callback){
    setTimeout(()=>{
        console.log(message);
        callback();
    }, delay);
}

delayedMessage("This is set timeout function", 2000, ()=>{
    console.log("This message is printed after 2 seconds of delay");

});