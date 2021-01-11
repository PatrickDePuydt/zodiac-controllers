const express = require('express');
const ejsLayouts = require('express-ejs-layouts');

const app = express();
app.use(ejsLayouts);

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
  res.render('home');
});

app.get('/air', (req, res) => {
  res.render('air', {airElements: ['sand crab', 'corny joke dog']})
});
app.get('/water', (req, res)=>{
  res.render('./water');
});

app.get('/fire', (req, res)=>{
  res.render('./fire');
});

app.get('/earth', (req, res)=>{
  res.render('./earth');
});

app.listen(3000);