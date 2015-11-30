angular.module('AngularScaffold.Controllers')
  .controller('LoginController', ['$scope','$state', 'HomeService', function ($scope,$state, HomeService) {
    	$scope.usuarioG = {};

    	$scope.goVendedor=function(){
    		$state.go('vendedor');
    	}
    
}]);
