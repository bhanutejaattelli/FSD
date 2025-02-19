const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/api/data' && req.method === 'GET') {
    const data = {
      name: 'John Doe',
      age: 30,
      city: 'New York'
    };

    res.setHeader('Content-Type', 'application/json');

    res.statusCode = 200;

    res.end(JSON.stringify(data)); 
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
