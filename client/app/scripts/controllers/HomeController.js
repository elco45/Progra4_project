angular.module('AngularScaffold.Controllers')
  .controller('HomeController', ['$scope', 'HomeService', function ($scope, HomeService) {
    	$scope.title = "Facturación"
      $scope.productos = [];
      $scope.producto = {};
      $scope.vendedor={};
      $scope.cliente={};
      $scope.search={};
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
         HomeService.FindProductoByAccount($scope.search).then(function(response){
          $scope.productos = response.data;
        }).catch(function(err){
          alert('Error fetching productos')
        });
      }

      $scope.addFact=function(){
        console.log($scope.search)
          HomeService.AddFact($scope.search).then(function(response){
          if (!response.data[0].length) {
            $scope.factura.push(response.data[0]);
          }
          
          /*if($scope.factura.length == 3){
            $scope.factura = [];
          }*/
          
        }).catch(function(err){
          alert('Error fetching productos')
        });
      }
  }]);
