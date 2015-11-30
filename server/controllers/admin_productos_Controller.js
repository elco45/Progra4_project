var producto = require('../schemas/producto');

exports.Add_producto = {
	handler: function(request,reply){
		var newProducto = new producto({
	        id : request.payload.id,
			descripcion :request.payload.descripcion,
		 	fecha_ingreso: request.payload.fecha_ingreso,
		 	fecha_venc: request.payload.fecha_venc,
		 	precio: request.payload.precio,
		 	cantidad: request.payload.cantidad
		});
		newProducto.save();
		return reply('ok');
	}
}

exports.Get_producto = {
	handler: function(request,reply){
		var lo_que_venga =  producto.find({});
		reply(lo_que_venga);
	}
}