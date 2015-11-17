angular.module('AngularScaffold.Controllers')
  .controller('HomeController', ['$scope', 'HomeService', function ($scope, HomeService) {
    	$scope.title = "Tabla de usuarios."
      $scope.exampleObject = {text: "Hola, Mundo"}
      $scope.usuarios = [];
      $scope.usuario = {};

      $scope.getUsers = function(){
        HomeService.GetUsers().then(function(response){
          $scope.usuarios = response.data;
        }).catch(function(err){
          alert('Error fetching students')
        });
      }

      $scope.postUsers = function(){
        HomeService.PostUsers($scope.usuario).then(function(response){
          alert("Posted to /usuarios");
        }).catch(function(err){
          alert("Error posting to usuarios");
        });
      }
      $scope.changeExampleObject = function(){
        $scope.exampleObject = {text: "Adios, mundo."};
      }
  }]);
