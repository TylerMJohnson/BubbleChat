var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var wordsRouter = require('./routes/words');

var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

var fs = require('fs')
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.use('/chat', express.static(__dirname + '/public/bubblechat.html'));
app.use('/chat1', express.static(__dirname + '/public/bubblechat1.html'));
app.use('/', indexRouter);
app.use('/words', wordsRouter);
app.use('/words/chat', wordsRouter);
app.use('/words/game', wordsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

io.on('connection', function(client) {
  console.log('Client connected...');

  client.on('join', function(d) {
    let data = fs.readFileSync(path.resolve(__dirname, 'Chat.json'));
    let comments = JSON.parse(data).comments;
    var returndata = []
    comments.slice(-10).forEach(comment => { //provide the last 10 messages when connecting
        returndata.push(comment)
    });
    client.emit('load', returndata);
  });

  client.on('message', function(data) {
    client.emit('message', data);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`listening on ${PORT}`));


function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

module.exports = app;
