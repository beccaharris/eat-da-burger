// Dependencies //
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')

var exphbs = require('express-handlebars');

var PORT = process.env.PORT || 3000;
var app = express();

// Get content from 'public' folder //
app.use(express.static(process.cwd() + '/public'));

// Body Parser // 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Method Override //
app.use(methodOverride("_method"));





// Handlebars //
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Routes //
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

// Listener //
app.listen(PORT, function() {
  console.log('Server listening on: "http://localhost:"' + PORT);
});