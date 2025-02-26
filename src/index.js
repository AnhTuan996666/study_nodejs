const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars'); 
const path = require('path');
const app = express();
const port = 3002;

app.use(express.static(path.join(__dirname, 'public')));

// Add bootstrap
const bootstrapPath = path.join(__dirname, '../node_modules/bootstrap/dist');
app.use('/bootstrap', express.static(bootstrapPath));

// HTPP logger
app.use(morgan('combined'));

// Template engine setup


app.engine('hbs', engine({
  extname: '.hbs'
})); // change extend

// Use engine() instead of handlebars()
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views')); 

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/news', (req, res) => {
  res.render('news');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
