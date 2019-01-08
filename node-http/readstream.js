const fs = require('fs');
const file = '1111.mp4';

const readStream  = fs.createReadStream(file);
let progress = 0;
fs.stat(file, (err,data) => {
    const total = data.size;
    console.log(total);

readStream.on('data', (chunk) => {
    progress+=chunk.length;
    console.log(Math.round((100*progress)/total)+'%');
    });

readStream.on('end', () => {
    console.log('veri bitti');
    //console.log(progress);
    });
});