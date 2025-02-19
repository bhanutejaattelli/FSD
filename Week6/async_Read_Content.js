const fs=require('fs')

const filepath='File1.txt'

fs.readFile(filepath,'utf-8',(err,data)=>{
    if(err){
        console.log("Error in reading File:",err.message);
    }else{
        console.log('File Content :',data)
    }
})