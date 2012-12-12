
/**
 * Module dependencies.
 */

var express = require('express')
  , index = require('./routes/index')
  , data = require('./routes/data');
  
var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(require('stylus').middleware({ src: __dirname + '/public' }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

app.get('/', index.index);
app.get('/data', data.raw);
app.get('/similar/:title', data.similar);
app.get('/distance/:from/:to', data.distance);

app.listen(1337);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
