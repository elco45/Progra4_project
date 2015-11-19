angular.module('AngularScaffold.Services').factory('HomeService', ['$http',
	function($http){
		return {
				GetProductos: function(){
					return $http.get("v1/productos");
				},
				PostProductos: function(payload){
					return $http.post("v1/producto", payload);
				},
				FindProductoByAccount: function(payload){
					return $http.post("v1/producto/account",payload);
				},
				AddFact: function(payload){
					return $http.post("v1/factura",payload);
				}
	    };
}]);
