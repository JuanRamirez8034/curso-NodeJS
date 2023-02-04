const http = require('http');

const server = http.createServer(function(req, res){
  const url = req.url;

  if(url==='/'){
    return res.end('<h1>Hello world</h1>');
  }

  if(url === '/about'){
    // bloque de codigo que impide o limita las diferentes ejecuciones
    for (let i = 0; i < 2000; i++) {
      console.log('Random number '+ i);
    }
    return res.end('<h1>Hello about</h1>');
  }
});

server.listen(10000);
console.warn('Server in port 10000');
console.error('http://localhost:10000');