angular.module('AngularScaffold.Controllers')
  .controller('AdminController', ['$scope','$state', 'HomeService', function ($scope,$state, HomeService) {
    	$scope.title = "Administrador"
      $scope.productos = [];
      $scope.producto = {};
      $scope.search={};

      $scope.getProductos = function(){
        HomeService.GetProductos().then(function(response){
          $scope.productos = response.data;
        }).catch(function(err){
          alert('Error fetching productos')
        });
      }

      $scope.addProductos = function(){
        HomeService.PostProductos($scope.producto).then(function(response){
          alert("Posted to /productos");
        }).catch(function(err){
          alert("Error posting to productos");
        });
      }
      /*
      $scope.findProductos = function(){
         HomeService.FindProductoByAccount($scope.search).then(function(response){
          $scope.productos = response.data;
        }).catch(function(err){
          alert('Error fetching productos')
        });
      }*/

      $scope.goVend=function(){
        $state.go('vendedor');
      }
  }]);
