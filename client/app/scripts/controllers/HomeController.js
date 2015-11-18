angular.module('AngularScaffold.Controllers')
  .controller('HomeController', ['$scope', 'HomeService', function ($scope, HomeService) {
    	$scope.title = "Facturación"
      $scope.productos = [];
      $scope.producto = {};
      $scope.factura=[];

      $scope.getProductos = function(){
        HomeService.GetProductos().then(function(response){
          $scope.productos = response.data;
        }).catch(function(err){
          alert('Error fetching productos')
        });
      }

      $scope.postProductos = function(){
        HomeService.PostProductos($scope.producto).then(function(response){
          alert("Posted to /productos");
        }).catch(function(err){
          alert("Error posting to productos");
        });
      }  

      $scope.findProductos = function(){
        HomeService.FindProductos($scope.producto).then(function(response){
          $scope.productos = response.data;
          for (var i = 0; i < $scope.productos.length; i++) {
            if ($scope.producto.id==$scope.productos[i].id) {
              alert("entrooooooo!");
            };
          };
        }).catch(function(err){
          alert("Error posting to productos");
        });
      }  
}]);
