const events = require('events');
const eventEmitter = new events.EventEmitter();


eventEmitter.on('selamla', (object)=>{
    console.log(`merhaba: ${object.name} ${object.surname}`);
});
eventEmitter.emit('selamla', {name: 'serdar', surname:'tekin'});

eventEmitter.once('merhabaDe', () =>{
    console.log("merhaba");
});

eventEmitter.emit('merhabaDe');