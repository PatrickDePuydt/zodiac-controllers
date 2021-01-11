const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const app = express();
const path = require('path');

app.use(ejsLayouts);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.use('/air', require('./controllers/air')); // When someone hits `/air`, check for the const

app.get('/', (req, res)=>{
  res.render('home');
});

app.get('/water', (req, res) => {
  res.render('water', {waterElements: ['Private', 'Mysterious', 'Psychic', 'Charming', 'Emotional', 'Sensitive']})
});


app.get('/fire', (req, res) => {
  res.render('fire', {fireElements: ['Passionate', 'Strong Emotions', 'Tempremental', 'Energetic', 'Accomplished', 'Interesting']})
});


app.get('/earth', (req, res) => {
  res.render('earth', {earthElements: ['Grounded', 'Helpful', 'Practical', 'Materialistic', 'Dependable']})
});



app.listen(3000);