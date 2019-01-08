const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/', (req,res) =>{
    res.render('index.pug', {name: 'serdar ', surname: 'tekin '});
});
app.get('/home', (req,res) =>{
    res.render('home.pug');
});
app.get('/contact', (req,res) =>{
    res.render('contact.pug');
});



app.listen(3000);