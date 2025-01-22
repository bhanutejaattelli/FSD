function* cummulativeSum(){
    let sum = 0;
    while(true){
        yield sum;
        sum++;
    }

} 
    
const generator = cummulativeSum();
let sum = 0;
for(let i = 0; i < 10; i++){
    sum += generator.next().value;
}
console.log(sum);
