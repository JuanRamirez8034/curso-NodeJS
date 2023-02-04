// los modulos de node ya contiene otro directorio el cual viene con sus mismas funciones en
// forma de promesas validas para evitar escribir promesas desde cero o implementar modulos 
// extras
const {readFile} = require('fs/promises');


const _readFile = async ()=> {
  try{
    const file1 = await readFile('./files/file1.txt', 'utf-8');
    console.log(file1);

    const file2 = await readFile('./files/file2.json', 'utf-8');
    console.log(file2);

    throw new Error('Error ocacionado intencinalmente');

  }catch(error){
    console.warn(error);
  }
}

_readFile();