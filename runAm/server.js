
// boiler plate code has no real use

const express = require('express');
const path = require('path');
const app = express();
const { connectionDb } = require('./config/db');






// set the view engine to ejs
app.set('view engine', 'ejs');

const PORT = process.env.PORT || 3000;
// displaying static files

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  res.render('home');
});

app.get('/profile', function(req, res) {
  res.render('profile');
});

app.get('/dashboard', function(req, res) {
  res.render('dashboard.ejs');
});


app.post('/login', function(req, res) {
  const name = req.body.name;
  const password = req.body.password;

});


app.post('/sign_up', function(req, res) {
  res.render('home');
});

// about page

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);

});