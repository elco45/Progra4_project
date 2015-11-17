angular.module('AngularScaffold.Services').factory('HomeService', ['$http',
	function($http){
		return {
				GetProductos: function(){
					return $http.get("/productos");
				},
				PostProductos: function(payload){
					return $http.post("/productos", payload);
				}
	    };
}]);
