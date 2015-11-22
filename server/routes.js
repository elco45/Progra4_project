var homeController = require('./controllers/homeController');
var vendedorController =require('./controllers/vendedorController');
var adminController =require('./controllers/adminController');

exports.endpoints = [{method: 'GET', path: '/{param*}', config: homeController.home},
					{method: 'GET', path: '/v1/productos', config: adminController.getProductos},
					{method: 'POST', path: '/v1/productos', config: adminController.postProductos},
					{method: 'POST', path: '/v1/linea_fact', config: vendedorController.GetProductoById}];
