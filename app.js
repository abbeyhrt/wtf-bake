const express = require('express');
//const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/index');

const app = express();

//according to bosman, this is the view engine setup,
//i think it is just directing something so the file where we are keepi
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.listen(3000, function() {
  console.log('You are listening on port 3000');
});

module.exports = app;
