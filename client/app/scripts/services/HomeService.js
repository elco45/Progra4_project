angular.module('AngularScaffold.Services').factory('HomeService', ['$http',
	function($http){
		return {
			AddFactura: function(payload){
				return $http.post("v1/linea_fact",payload);
			},
			Facturar: function(payload){
				return $http.put("v1/fact",payload);
			},
			GetProductos:function(){
				return $http.get("v1/productos");
			},
			PostProductos: function(payload){
				return $http.post("v1/productos",payload);
			},
			AddProductos: function(payload){
				return   $http.post("v1/add_producto",payload);
			},
			GetProductos: function(){
				return   $http.get("/v1/get_producto");
			},
			AddUsuario: function(payload){
				return   $http.post("/v1/add_usuarios",payload);
			},
	    };
}]);