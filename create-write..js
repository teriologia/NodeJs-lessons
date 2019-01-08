const fs = require('fs');

fs.appendFile('deneme.txt', ' güncelleme \n', (err) =>{
if(err)
    throw err;
console.log('dosyaya ekleme yapıldı');
});

fs.writeFile('deneme2.txt', 'write file denemesi  \n', (err) =>{
    if(err)
        throw err;
    console.log('dosyaya ekleme yapıldı');
});