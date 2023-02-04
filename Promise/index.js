const {readFile} = require('fs');


const FilePromise = (path)=>{
  return new Promise((resolve, reject)=>{
    
    readFile(path, 'utf-8',(error, data)=>{

      if(error) return reject(error);

      return resolve(data);

    });

  });
};

FilePromise('./files/file1.txt')
  .then(resp => console.log(resp))
  .then(()=>FilePromise('./files/file2.json'))
    .then(resp => console.log(resp))
  .catch(error => console.error(error))

console.log('hola');