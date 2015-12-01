angular.module('AngularScaffold.Controllers')
  .controller('AdminController', ['$scope','$state', 'HomeService', function ($scope,$state, HomeService) {
    	$scope.title = "Administrador"
      $scope.productos = [];
      $scope.producto = {};
      $scope.search={};
      $scope.template = '';
      $scope.user = {};

      $scope.getProductos = function(){
        HomeService.GetProductos().then(function(response){
          $scope.productos = response.data;
        }).catch(function(err){
          alert('Error fetching productos')
        });
      }
      $scope.getProductos();
      $scope.addProductos = function(){
        HomeService.PostProductos($scope.producto).then(function(response){
          $scope.getProductos();
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

      $scope.cambiar_div = function(nombre){
        if (nombre==="vendedor") {
          $scope.template = '/views/vendedor_admin.html';
        }else if (nombre==="productos_admin"){
          $scope.template = '/views/productos_admin.html';
        }else if (nombre==="productos_riesgo") {
          $scope.template = '/views/productos_riesgo_admin.html';
        }else if (nombre==="graficas_ingreso") {
          $scope.template = '/views/graficas_ingreso.html';
        }else if (nombre==="graficas_producto") {
          $scope.template = '/views/grafica_producto.html';
        };
      }

      $scope.goVend=function(){
        $state.go('vendedor');
      }

      $scope.register = function(){
        var user = {username: $scope.user.username, 
                    password:  $scope.user.password, 
                    ID: $scope.user.ID,
                    nombre: $scope.user.nombre,
                    tipo: $scope.user.tipo};
        HomeService.Register(user).then(function(response){
          alert('Registered in correctly!');
        }).catch(function(err){
          console.log(err);
          alert(err.data.error + " " + err.data.message);
        })
      }
  }]);
