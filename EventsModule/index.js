const eventEmiter = require('events');

// creacion de instancia del evento personalizado a crear
const myCustomEvent = new eventEmiter();

// definiendo el tipo de evento, el nombre del evento es personalizado (nombre que queramos)
// "on" es la propiedad para definir el evento y la acción que este realizará
myCustomEvent.on('myNameEvent', (v1, v2)=>{
  console.log('Print recived');
  console.log(typeof v1, typeof v2);
  console.log(v1, v2);
})


// llamando al evento definido
// "emit" es la propieda que permite llamar al evento definido (se llama por el nombre asignado al evento)
myCustomEvent.emit('myNameEvent', 'Holas', {arr:["Cara e' bola", 1, true], name:"Jhon"});