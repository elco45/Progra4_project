angular.module('AngularScaffold.Controllers')
  .controller('Admin_Productos_Controller', ['$scope','$state', 'HomeService', function ($scope,$state, HomeService) {
  	$scope.productoA = {};
    $scope.productoAs=[];

  	$scope.getProducto = function(){
  		HomeService.GetProductos().then(function(response){
  			$scope.productoAs = response.data;
  		}).catch(function(err){
  			alert("No se pudo agarrar Los Productos");
  		});
  	}

  	$scope.getProducto();
  	$scope.addProductos= function(){
  		HomeService.AddProductos($scope.productoA).then(function(response){
  			alert("Agregado exitosa mente");
  			$scope.getProducto();
  		}).catch(function(err){
  			alert("No se puede agregar El nuevo Producto");
  		});

  	}

  }]);