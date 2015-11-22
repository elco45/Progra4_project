angular.module('AngularScaffold.Services').factory('LoginService', ['$http',
	function($http){
		return {
			GoVendedor: function(){
				return $http.get("v1/vendedor");
			},
	    };
}]);