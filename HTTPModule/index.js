const http = require('http');
const port = 2500;//puerto para el servidor

// crear servidor
const server = http.createServer((req, resp)=>{
  const url = req.url;//contenido de la url
  console.log(url);

  if(url ==='/home'){
    resp.write('<h1>Welcome to server!<br><a href="/">Back</a></h1>');//responder texto
    resp.end();//cerrar respuesta
    return;
  }

  if( url === '/about'){
    resp.write('<h1>We about...</h1><br><a href="/">Back</a>');//responder texto
    return resp.end();//cerrar respuesta
  }

  resp.write(`
    <h1>Not found</h1>
    <ul>
      <li><a href="/home">home</a></li>.
      <li><a href="/about">about</a></li>
    </ul>
  `);//responder texto
  return resp.end();//cerrar respuesta
});

// ejecutar servidor
server.listen(port);

console.log(`Server in port ${port}, http:localhost:${port}`);