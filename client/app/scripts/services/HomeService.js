angular.module('AngularScaffold.Services').factory('HomeService', ['$http',
	function($http){
		return {
			AddFactura: function(payload){
				return $http.post("v1/linea_fact",payload);
			},
			GetProductos:function(){
				return $http.get("v1/productos");
			},
			PostProductos: function(payload){
				return $http.post("v1/productos",payload);
			}/*,
			Facturar: function(payload){
				return $http.put("v1/fact",payload);
			}*/
	    };
}]);