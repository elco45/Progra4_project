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
    path: '/{param*}',
    config: {
      handler:{
        directory: {
          path: ['../client/app', '../client/bower_components']
        }
      }
    }
  }, {
    method: 'GET',
    path: '/productos',
    config: {
      handler: function(request, reply){
        var productos = [{id:"1",descripcion:"manzana",fecha_Ingreso:"01/11/2015",fecha_Venc:"15/11/2015"},
        {id:"2",descripcion:"pera",fecha_Ingreso:"01/11/2015",fecha_Venc:"15/11/2015"},
        {id:"3",descripcion:"banana",fecha_Ingreso:"01/11/2015",fecha_Venc:"15/11/2015"},
        {id:"4",descripcion:"sandia",fecha_Ingreso:"01/11/2015",fecha_Venc:"15/11/2015"},];
        reply(productos);
      }
    }
  },{
    method: 'POST',
    path: '/productos',
    config: {
      handler: function(request, reply){
        console.log("POST a /productos realizado, con la siguiente data: Descripcion: \n" + request.payload.descripcion + "\nfecha_Ingreso: " + request.payload.fecha_Ingreso+"\nfecha_Venc: "+request.payload.fecha_Venc )
        reply('ok');
      }
    }
  }]);



	server.start(function () {
	    console.log('Server running at:', server.info.uri);
	});
});
