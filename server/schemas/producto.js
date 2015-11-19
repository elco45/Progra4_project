var mongoose = require('mongoose');

var ProductoSchema = new mongoose.Schema({
  name : String,
  account : String,
});

module.exports = mongoose.model('Producto', ProductoSchema);
