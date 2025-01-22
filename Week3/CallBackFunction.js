function greet(name,callback){
    setTimeout(function(){
        console.log('Hello'+ name);
        callback();
    }, 2000);
    return callback();
}

function Printmsg(msg){
    return msg;
}

const result=greet('Bhanu', Printmsg);
console.log(result);
