var homeController = require('./controllers/homeController');
var vendedorController =require('./controllers/vendedorController');
var adminController =require('./controllers/adminController');
var usersController = require('./controllers/usersController');
var authController = require('./controllers/authController');

exports.endpoints = [{method: 'GET', path: '/{param*}', config: homeController.home},
					{method: 'GET', path: '/v1/productos', config: adminController.getProductos},
					{method: 'POST', path: '/v1/productos', config: adminController.postProductos},
					{method: 'POST', path: '/v1/linea_fact', config: vendedorController.GetProductoById},
					{method: 'PUT', path: '/v1/fact', config:vendedorController.PutProductos},
					{method: 'POST', path: '/v1/register', config: usersController.createUser},
					{method: 'POST', path: '/v1/login', config: authController.login},
					{method: 'GET', path: '/v1/logout', config: authController.logout}];
