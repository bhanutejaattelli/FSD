function greet(name,callback){
    console.log('Hello '+ name);
return callback();
}

function Printmsg(msg){
return msg;
}

const result=greet('Bhanu', Printmsg);
console.log(result);
