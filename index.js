var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
  //Notificar nueva oferta
  socket.on('setOffert', function(msg){
    io.emit('setOffert', msg);
  }); 
  //Notificar nueva ofesadfasfrta
  socket.on('setOffert', function(msg){
    io.emit('setOffert', msg);
  }); 
      //Notificar nueva oferasfasfasta
  socket.on('setOffert', function(msg){
    io.emit('setOffert', msg);
  }); 
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
