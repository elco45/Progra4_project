angular.module('AngularScaffold.Controllers')
  .controller('VendedorController', ['$scope','$state', 'VendedorService', function ($scope,$state, VendedorService) {
    	$scope.title = "Facturación";
      $scope.linea_factura={};
      $scope.factura=[];
      $scope.producto={};
      $scope.search={};
      $scope.lf_cantidad=1;

      $scope.goAdmin=function(){
        $state.go('admin');
      }

      $scope.addFactura=function(){
        VendedorService.AddFactura($scope.search).then(function(response){
          $scope.producto = response.data[0];
          if ($scope.producto.cantidad<=0) {
            alert("Ya no tiene en el inventario");
          }else{
            $scope.linea_factura.id=$scope.producto.id;
            $scope.linea_factura.descripcion=$scope.producto.descripcion;
            $scope.linea_factura.precio=$scope.producto.precio;
            $scope.linea_factura.cantidad=$scope.producto.cantidad;
            $scope.linea_factura.total=$scope.producto.precio*$scope.lf_cantidad;
            $scope.factura.push($scope.linea_factura);
            $scope.linea_factura={};
          }
        }).catch(function(err){
          alert('Error fetching productos')
        });
      }

      $scope.changeCant = function(object, $index){
        object.total = $('#'+$index).val()*object.precio;
      }


}]);
