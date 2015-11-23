angular.module('AngularScaffold.Controllers')
  .controller('VendedorController', ['$scope','$state', 'HomeService', function ($scope,$state, HomeService) {
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
        HomeService.AddFactura($scope.search).then(function(response){
          $scope.producto = response.data[0];
          if ($scope.producto.cantidad<=0) {
            alert("Ya no tiene en el inventario");
          }else{
            $scope.existe=-1;
            for(var i = 0; i < $scope.factura.length; i++) {
                if($scope.factura[i]['id'] === $scope.producto.id) {
                    $scope.existe=i;
                    break;
                }
            }
            if ($scope.existe===-1) {
              $scope.linea_factura = {
                id : $scope.producto.id,
                descripcion: $scope.producto.descripcion,
                precio: $scope.producto.precio,
                cantidad:1,
                cantidadmax: $scope.producto.cantidad,
                total: $scope.producto.precio*$scope.lf_cantidad
              }
              $scope.factura.push($scope.linea_factura);
            }else{
              $scope.temp=$scope.factura[$scope.existe]['cantidad'];
              if ($scope.temp<=$scope.factura[$scope.existe]['cantidadmax']) {
                $scope.factura[$scope.existe]['cantidad']++;
                $('#'+$scope.existe).val($scope.temp);
                $scope.factura[$scope.existe]['total']=$scope.temp*$scope.factura[$scope.existe]['precio'];
                $('#'+$scope.existe+'a').val($scope.factura[$scope.existe]['total'])
              }else{
                alert('Ya no hay en el inventario!');
              }
              
            }
          }
        }).catch(function(err){
          alert('No existe en el inventario')
        });
      }

      $scope.efectuarPago =function(){
        
      }

      $scope.changeCant = function(object, $index){
        object.total = $('#'+$index).val()*object.precio;
        $scope.factura[$index]['total']=$('#'+$index).val()*object.precio;
      }

      $scope.removeFact =function(object){
        for (var i = $scope.factura.length; i--;) {
          if ($scope.factura[i].id === object.id) {
            $scope.factura.splice(i, 1);
          }
        }
      }

      function findWithAttr(array, attr, value) {
        for(var i = 0; i < array.length; i += 1) {
            if(array[i][attr] === value) {
                return i;
            }
        }
      }
      
}]);
