var producto = require('../schemas/producto');/*objetos q se van a volver tablas, ayuda a crud el bd*/


exports.GetProductoById = {
  handler: function(request, reply){
    var productos = producto.find({id:request.payload.id});
    reply(productos);
  }
} 

exports.PutProductos ={
  handler: function(request, reply){
    producto.findOneAndUpdate({id:request.payload.id},{cantidad:request.payload.cantidadmax-request.payload.cantidad},function(err,productos){
      productos.save(function(err){
        if (err) {
          alert("YES");
        }
      });
    });

  }
}






