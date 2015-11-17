angular.module('AngularScaffold.Controllers')
  .controller('HomeController', ['$scope', 'HomeService', function ($scope, HomeService) {
    	$scope.title = "Tabla de estudiantes de programamción 4."
      $scope.exampleObject = {text: "Hola, Mundo"}
      $scope.productos = [];
      $scope.producto = {};

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
      $scope.changeExampleObject = function(){
        $scope.exampleObject = {text: "Adios, mundo."};
      }
  }]);
