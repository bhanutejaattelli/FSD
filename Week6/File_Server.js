const fs=require('fs')
const http=require('http')
const path=require('path')

const server = http.createServer((req,res)=>{
    if(req.method==='GET'&& req.url==='/'){
        const filePath=path.join(__dirname,'index.html');

        fs.readFile(filePath,'utf-8',(err,data)=>{
            if(err){
              res.writeHead(500,{'Content-Type':'text/plain'});
              res.end('Server is unable to read the file');  
            }else{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.end(data);
            }
        });
    }else{
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

// const port=3020;
// const host='localhost'

server.listen(3000,()=>{
    console.log('Server is running at http://localhost:3000');
});