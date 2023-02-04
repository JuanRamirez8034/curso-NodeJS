const {mkdir, writeFile} = require('fs/promises');
const path = require('path');

// ruta del directorio de archivos
const fileName = 'bigFile.txt';
const dir = path.join(__dirname, 'files');

/*===========================================================
  Funcinalidad para crear el archivo y el directorio
===========================================================*/
const createPath = async ()=>{
  try{
    // intentando crear el directorio
    console.log(`Bulding dir in: ${dir}`);
    // recursive -> true => ayuda a evitar que arroge un error si el directorio ya existia
    mkdir(dir ,{recursive:true}, (error) =>{
      if(error) {
        throw error;
      }
    });
    // si todo va bien
    return true;
  }catch(e){
    console.log(e);
    // si todo va mal
    return false;
  }
}

const createFile = async()=>{
  try {
    await writeFile(dir + '/' + fileName, "Hello! I'm Juan, again ;). ".repeat(500));
    console.log('File created, success');
  } catch (error) {
    console.log(error);
  }
}

// if(createPath()){
//   createFile();
// }

/*===========================================================
  Funcionalidad para uso del stream y http
===========================================================*/
const {createReadStream} = require('fs');
const http = require('http');
const eventEmiter = require('events');

const server = http.createServer((req, res)=>{

  // creando evento
  const response = new eventEmiter();

  response.on('resp', (string)=>{
    res.write(string);
    res.end();
  })

  // creando el lector de archivos por stream
  const fileStream = createReadStream(`${dir}/${fileName}`, {encoding:'utf-8', highWaterMark:20});

  // leyendo el archivo en porciones
  fileStream.on('data', (porcion)=>{
    // pasando la porcion a la respuesta y devolviendo
    fileStream.pipe(res);
  });

  // resolviendo errores
  fileStream.on('error', (error)=>{
    console.log(error);
  });

});

//ejecuntando servidor
const port = 6700;
server.listen(port);

console.warn(`Server streamFile on port ${port}`);
console.log(`http://localhost:${port}`)