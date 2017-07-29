var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var passport = require('./strategies/user_sql.js');
var session = require('express-session');

// Route includes
var index = require('./routes/index');
var user = require('./routes/user');
var register = require('./routes/register');
var inventory = require('./routes/inventory');
var events = require('./routes/events');
var vendor = require('./routes/vendor');
var annualgoal = require('./routes/annualgoal');
var partners = require('./routes/partners');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Serve back static files
app.use(express.static(path.join(__dirname, './public')));

// Passport Session Configuration //
app.use(session({
  secret: 'secret',
  key: 'user',
  resave: 'true',
  saveUninitialized: false,
  cookie: {
    maxage: 60000,
    secure: false
  }
}));

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/register', register);
app.use('/user', user);
app.use('/inventory', inventory);
app.use('/events', events);
app.use('/vendor', vendor);
app.use('/annualgoal', annualgoal);
app.use('/partners', partners);
app.use('/*', index);


// App Set //
app.set('port', (process.env.PORT || 5000));

// Listen //
app.listen(app.get("port"), function() {
  console.log("Listening on port: " + app.get("port"));
});
