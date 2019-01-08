const fs = require('fs');

fs.readFile('demo.txt', (error, data) => {
    if(error)
    {
        console.log(error);
    }
    console.log(data.toString());
    console.log('dosya okuma işlemi bitti');
});

const demoDosya = fs.readFileSync('demo.txt');
console.log(demoDosya.toString());
console.log('dosya okuma bitti');
