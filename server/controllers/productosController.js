var producto = require('../schemas/producto');/*objetos q se van a volver tablas, ayuda a crud el bd*/

exports.getProductos = {
  handler: function(request, reply){
    var productos = producto.find({});
    reply(productos);
  }
}

exports.createProducto = {
  handler: function(request, reply){
    var newProducto = new producto({
      name: request.payload.name,
      account: request.payload.account
    });
    newProducto.save();
    console.log('producto saved');
    return reply('ok');
  }
}
exports.getProductoByAccount = {
  handler: function(request, reply){
    var productos = producto.find({account:request.payload.account});
    reply(productos);
  }
} 

exports.addFactu={
  handler: function(request, reply){
    var productos = producto.find({account:request.payload.account});
    reply(productos);
  }
}
