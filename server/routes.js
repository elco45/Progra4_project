var homeController = require('./controllers/homeController');
var productosController = require('./controllers/productosController');

exports.endpoints = [{method: 'GET', path: '/{param*}', config: homeController.home},
					{method: 'GET', path: '/v1/productos', config: productosController.getProductos},
           			{method: 'POST', path: '/v1/producto', config: productosController.createProducto},
           			{method: 'POST', path: '/v1/producto/account',config:productosController.getProductoByAccount},
           			{method: 'POST',path: '/v1/factura',config:productosController.addFactu}];
