angular.module('AngularScaffold.Services').factory('HomeService', ['$http',
	function($http){
		return {
				GetUsers: function(){
					return $http.get("/usuarios");
				},
				PostUsers: function(payload){
					return $http.post("/usuarios", payload);
				}
	    };
}]);
