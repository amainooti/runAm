
// boiler plate code has no real use

const express = require('express');
const path = require('path');
const app = express();


// set the view engine to ejs
app.set('view engine', 'ejs');


// displaying static files

app.use(express.static(path.join(__dirname, 'public')));
// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  res.render('index');
});

// about page


app.listen(8080);
console.log('Server is listening on port 8080');