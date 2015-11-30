angular.module('AngularScaffold.Controllers')
  .controller('Admin_Usuarios_Controller', ['$scope','$state', 'HomeService', function ($scope,$state, HomeService) {
    	$scope.usuarioG = {};

    	$scope.AddUsuario = function(){
	  		HomeService.AddUsuario($scope.usuarioG).then(function(response){
	  			alert("Agregado exitosa mente");
	  		}).catch(function(err){
	  			alert("No se puede agregar El nuevo Producto");
  			});

  		}
}]);
