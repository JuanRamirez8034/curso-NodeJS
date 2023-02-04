const fs = require('fs');

const data = JSON.stringify({
  users:[
    {id:01,name:"Juan",familyName:"Ramirez",age:"22"},
    { id: 02, name: "Sther", familyName: "Salazar", age: "22" },
    { id: 03, name: "Lissette", familyName: "Lozano", age: "52" }
  ],
  hobby:['sleep', 'Dancing', 'Sing', 'Listen Music']
})

//crear archivo (forma sincrona)
fs.writeFileSync('./FSModule/files/myJsonFile.json', data);

//          leer archivos (forma sincrona)
console.log(fs.readFileSync('./FSModule/files/myJsonFile.json', 'utf8'));





// crear archivos de forma asincrona
fs.writeFile('./FSModule/files/myAsyncFile.txt', 'Este es un archivo creado de forma asincrona' ,(error, data)=>{
  console.log(error, data);
  
  // si hay un error salimos
  if (error) return;

  // leer archivo de forma asincrona
  fs.readFile('./FSModule/files/myAsyncFile.txt', 'utf-8', (error, data)=>{
    // si existe error se imprime
    if(error){
      console.log(error);
      return;
    }

    // data obtenida
    console.log(data);
  });

});