angular.module('AngularScaffold.Services').factory('VendedorService', ['$http',
	function($http){
		return {
			GoAdmin: function(){
				return $http.get("v1/admin");
			},
			AddFactura: function(payload){
				return $http.post("v1/linea_fact",payload);
			}
			
	    };
}]);