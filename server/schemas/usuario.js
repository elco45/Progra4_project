var mongoose = require('mongoose');

var UsuarioSchema = new mongoose.Schema({
	nombre: String,
	id: String,
	user: String,
	pass: String,
	tipo: String,
});
module.exports = mongoose.model('lista_usuarios',UsuarioSchema);