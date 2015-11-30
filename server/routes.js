var homeController = require('./controllers/homeController');
var vendedorController =require('./controllers/vendedorController');
var adminController =require('./controllers/adminController');
var admin_productos_Controller= require("./controllers/admin_productos_Controller");
var usuario_controller =require("./controllers/usuario_controller");

exports.endpoints = [{method: 'GET', path: '/{param*}', config: homeController.home},
					{method: 'GET', path: '/v1/productos', config: adminController.getProductos},
					{method: 'POST', path: '/v1/productos', config: adminController.postProductos},
					{method: 'POST', path: '/v1/linea_fact', config: vendedorController.GetProductoById},
					{method: 'PUT', path: '/v1/fact', config:vendedorController.PutProductos},
					{method: 'POST', path: '/v1/add_producto', config:admin_productos_Controller.Add_producto},
					{method: 'GET', path: '/v1/get_producto', config:admin_productos_Controller.Get_producto},
					{method: 'POST', path: '/v1/add_usuarios', config:usuario_controller.Add_usuarios}];
