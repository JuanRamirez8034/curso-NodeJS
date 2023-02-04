const {readFile} = require('fs');
const {promisify} = require('util');

// almacenando la instancia de la funcion convertida en promesa
// la nueva funcion optiene las mismas propiedades de la funcion origna, pero ahora es una promesa valida
const FilePromise = promisify(readFile);

const _readFile = async ()=> {
  try{
    const file1 = await FilePromise('./files/file1.txt', 'utf-8');
    console.log(file1);

    const file2 = await FilePromise('./files/file2.json', 'utf-8');
    console.log(file2);

    throw new Error('Error ocacionado intencinalmente');

  }catch(error){
    console.warn(error);
  }
}

_readFile();