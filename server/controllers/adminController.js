var producto = require('../schemas/producto');/*objetos q se van a volver tablas, ayuda a crud el bd*/
var user = require('../schemas/user')

exports.getProductos = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin']
  },
  handler: function(request, reply){
    var productos = producto.find({});
    reply(productos);
  }
}

exports.getUsers = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin']
  },
  handler: function(request, reply){
    var users=user.find({});
    reply(users);
  }
}

exports.postProductos = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin']
  },
  handler: function(request, reply){
    var r= "";
    for (var i = 0; i < 10; i++) {
       r += request.payload.fecha_venc[i];
    };
    request.payload.fecha_venc = r;
    var newProducto = new producto({
    	id: request.payload.id,
      	descripcion: request.payload.descripcion,
      	fecha_ingreso: request.payload.fecha_ingreso,
      	fecha_venc: request.payload.fecha_venc,
      	precio: request.payload.precio,
      	cantidad: request.payload.cantidad

    });
    newProducto.save();
    console.log('producto saved');
    return reply('ok');
  }
}