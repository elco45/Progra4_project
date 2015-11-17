var hapi = require('hapi');
var inert = require('inert');

var server = new hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000,
});


server.register(inert, function(err){

  server.route([{
    method: 'GET',
    path: ' /{param*}',
    config: {
      handler:{
        directory: {
          path: ['../client/app', '../client/bower_components']
        }
      }
    }
  }, {
    method: 'GET',
    path: '/usuarios',
    config: {
      handler: function(request, reply){
        var usuarios = [{user:"admin",pass:"123",posicion:"admin"},
        {user:"venderdor1",pass:"123",posicion:"vendedor"},
        {user:"vendedor2",pass:"123",posicion:"vendedor"}];
        reply(usuarios);
      }
    }
  },{
    method: 'POST',
    path: '/usuarios',
    config: {
      handler: function(request, reply){
        console.log("POST a /students realizado, con la siguiente data: User: \n" + request.payload.user + "\nPassword: " + request.payload.pass+"\nPosicion: "+request.payload.posicion )
        reply('ok');
      }
    }
  }]);



  server.start(function () {
      console.log('Server running at:', server.info.uri);
  });
});