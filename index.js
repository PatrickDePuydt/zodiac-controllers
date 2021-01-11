const express = require('express');
const ejsLayouts = require('express-ejs-layouts');

const app = express();
app.use(ejsLayouts);

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
  res.render('home');
});

app.get('/air', (req, res)=>{
  res.render('./air');
});

app.listen(3000);