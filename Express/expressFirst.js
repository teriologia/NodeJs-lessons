const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/', (req,res) =>{
    res.render('index.pug', {name: 'serdar ', surname: 'tekin '});
});

app.listen(3000);