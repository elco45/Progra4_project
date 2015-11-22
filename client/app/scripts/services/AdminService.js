angular.module('AngularScaffold.Services').factory('AdminService', ['$http',
	function($http){
		return {
			GoVend: function(){
				return $http.get("v1/vend");
			},
			GetProductos:function(){
				return $http.get("v1/productos");
			},
			PostProductos: function(payload){
				return $http.post("v1/productos",payload);
			}
	    };
}]);