var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var exphbs = require('express-handlebars');

var index = require('./routes/index');
var index2 = require('./routes/index2');
// var users = require('./routes/users');
var add = require('./routes/add');
var tasks = require('./routes/tasks');
var tasks2 = require('./routes/tasks2');
var groups1 = require('./routes/groups1');
var feed = require('./routes/feed');
var login = require('./routes/login');
var profile = require('./routes/profile');
var add2 = require('./routes/add2');

var edit = require('./routes/edit');
var edit2 = require('./routes/edit2');

var loginSubmit = require('./routes/loginSubmit');
var loginError = require('./routes/loginError');
var done = require('./routes/done');
var done2 = require('./routes/done2');
var remove = require('./routes/remove');

var app = express();

var taskData = require('./taskdata.json');




app.locals.taskData = taskData;
// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

app.set('views', path.join(__dirname, 'views'));
app.set('taskData', taskData);
app.set('view engine', 'handlebars');
app.engine('.handlebars', exphbs({defaultLayout: 'main'}));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// ROUTES

app.get('/login', login.view);

app.get('/loginError', loginError.view);

app.get('/', index.view);
app.get('/index2', index2.view);

// app.get('/users', users.view);
app.get('/tasks', tasks.view);
app.get('/tasks2', tasks2.view);
// app.use('/feed', feed);

app.get('/add', add.addTask);
app.get('/add2', add2.addTask2);
app.get('/edit', edit.editTask);
app.get('/edit2', edit2.editTask2);



app.get('/groups1', groups1.view);
app.get('/feed', feed.view);
app.get('/profile/:name', profile.personInfo);
app.get('/loginSubmit', loginSubmit.loginSub);
app.get('/done', done.deleteTask);
app.get('/done2', done2.deleteTask2);
app.get('/remove', remove.permaDelete);

// app.get('/groups1', function(req, res, next) {
  // res.render('groups1', data.groupsData);
 //});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
