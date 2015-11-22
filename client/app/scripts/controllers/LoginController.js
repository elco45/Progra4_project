angular.module('AngularScaffold.Controllers')
  .controller('LoginController', ['$scope','$state', 'LoginService', function ($scope,$state, LoginService) {
    	$scope.title = "Login"

      $scope.GoVendedor=function(){
        $state.go('vendedor');
      }
}]);
