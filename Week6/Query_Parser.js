const http=require('http')
const url=require('url')

const server=http.createServer((req,res)=>{
    const parsedurl=url.parse(req.url,true);

    if(parsedurl.pathname==='/greet'){
        const name=parsedurl.query.name;

        if(name){
            res.writeHead(200,{'Content-Type':'text/plain'});
            res.end(`Hello,${name}!`);
        }else{
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('Name query parameter is missing!');
        }
    }else{
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

const port=3020;
const host='localhost'

server.listen(port,host,()=>{
    console.log(`Server is running at http://${host}:${port}`);
});

//http://localhost:3020/greet?name=bhanu