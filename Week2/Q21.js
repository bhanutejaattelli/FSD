function* fibonacci(){
    let[a,b]=[0,1];
    while(true){
        yield a;
        [a,b]=[b,a+b];
    }

}

let fib = fibonacci();

for(let i=0;i<10;i++){
    console.log(fib.next().value);
}