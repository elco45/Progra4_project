var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var UserSchema = new mongoose.Schema({
  username : {type: String, unique: true, required: true},
  password : String,
  nombre: String,
  ID: String,
  tipo: String
});

UserSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User', UserSchema);
