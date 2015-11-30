var usuario = require('../schemas/usuario');


exports.Add_usuarios  = {
	handler: function(request,reply){
		var newUsuario = new usuario({
			nombre: request.payload.nombre,
			id: request.payload.id,
			user: request.payload.user,
			pass: request.payload.pass,
			tipo: request.payload.tipo
		});
		newUsuario.save();
		return reply('ok');
	}

}