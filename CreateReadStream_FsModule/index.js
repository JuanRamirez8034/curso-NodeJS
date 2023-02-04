// crear archivo grande
// const {writeFile} = require('fs/promises');

// (async()=>{
//   await writeFile('./files/bigFile.txt', 'Holas soy Juan ;). '.repeat(1000));
// })();

// creando el stream para leer el archivo en partes
const {createReadStream} = require('fs');

// creando el stream que leera el archivo especificado
// recibe eñ path y un objeto con las posibles configuraciones a acomodar
const myStream = createReadStream('./files/bigFile.txt', {encoding:'utf-8',highWaterMark:20});

// realizando la lectura y ejecutando la funcionalidad con los fragmentos recibidos
// el evento 'data' permite la lectura, 'chunk'->'porcion' es la data (se puede nombrar al antojo)
myStream.on('data', (chunk)=>{
  console.log(chunk);
});

// evento para caso de error
myStream.on('error' ,(error)=>{
  console.log(error);
})

// evento al momento de terminar la lectura
myStream.on('end',()=>{
  console.log('Readed finish');
})