const {readFile} = require('fs');

const FilePromise = (path) => {
  return new Promise((resolve, reject) => {

    readFile(path, 'utf-8', (error, data) => {

      if (error) return reject(error);

      return resolve(data);

    });

  });
};


const _readFile = async ()=> {
  try{
    const file1 = await FilePromise('./files/file1.txt');
    console.log(file1);

    const file2 = await FilePromise('./files/file2.json');
    console.log(file2);

    throw new Error('Error ocacionado intencinalmente');

  }catch(error){
    console.warn(error);
  }
}

_readFile();