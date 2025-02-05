//using module
function add(a,b){
    return a + b;
}

function mul(a,b){
    return a*b;
}

module.exports={add,mul};

//using exports

module.exports.addition=function(a,b){
    return a+b;
}

module.exports.multiplication=function(a,b){
    return a*b;
}

// using classes

class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    introduce(){                              
        return  `Hi ,Iam ${this.name} and I am ${this.age} years old`;  
    }
}