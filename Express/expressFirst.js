const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/', (req,res) =>{
    res.render('index.pug');
});

app.listen(3000);