const fs = require('fs');

fs.unlink('deneme2.txt', (error) =>{
    if(error)
        throw error;
    console.log('dosta silindi');
});