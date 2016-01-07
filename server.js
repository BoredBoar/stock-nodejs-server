var express = require('express');
var app = express();
var PORT = 3333;

var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/static'));

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('custom-message', function(data) {
    //do something here
  });
}

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(PORT, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
