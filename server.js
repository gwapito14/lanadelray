var express = require('express');
var path = require('path');
//instantiate express
var app = express();
//set port
app.set('port', (process.env.PORT || 5000));
//use static files
app.use(express.static(path.join(__dirname, 'assets')));
//express routes
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'assets/index.html'));
});
app.get('/honeymoon', function(req, res){
res.sendFile(path.join(__dirname, 'assets/honeymoon.html'));
});
app.get('/ultraviolence', function(req, res){
res.sendFile(path.join(__dirname, 'assets/ultraviolence.html'));
});
//express server listen
var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port ',app.get('port'));
});