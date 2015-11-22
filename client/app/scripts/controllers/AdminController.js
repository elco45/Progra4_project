angular.module('AngularScaffold.Controllers')
  .controller('AdminController', ['$scope','$state', 'AdminService', function ($scope,$state, AdminService) {
    	$scope.title = "Administrador"
      $scope.productos = [];
      $scope.producto = {};
      $scope.search={};

      $scope.getProductos = function(){
        AdminService.GetProductos().then(function(response){
          $scope.productos = response.data;
        }).catch(function(err){
          alert('Error fetching productos')
        });
      }

      $scope.addProductos = function(){
        AdminService.PostProductos($scope.producto).then(function(response){
          alert("Posted to /productos");
        }).catch(function(err){
          alert("Error posting to productos");
        });
      }
      /*
      $scope.findProductos = function(){
         AdminService.FindProductoByAccount($scope.search).then(function(response){
          $scope.productos = response.data;
        }).catch(function(err){
          alert('Error fetching productos')
        });
      }*/

      $scope.goVend=function(){
        $state.go('vendedor');
      }
  }]);
