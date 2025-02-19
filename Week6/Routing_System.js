const http=require('http')

const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/plain');
    
    if (req.url==='/'){
        res.statusCode=200;
        res.end('This is to demonstrate the routing system within the Node.js http module');
    }
    else if (req.url==='/home'){
        res.statusCode=200;
        res.end('Welcome to Home');
    }else if(req.url==='/about'){
        res.end('About Us');
        res.statusCode=200;
    }else if(req.url==='/Contact'){
        res.end('Contact Us');
        res.statusCode=200;
    }else{
        res.statusCode=404;
        res.end('Page Not Found');
    }
});

const port=3020;
const host='localhost'

server.listen(port,host,()=>{
    console.log(`Server is running at http://${host}:${port}`);
});