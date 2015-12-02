angular.module('AngularScaffold.Controllers')
  .controller('AdminController', ['$scope','$state', 'HomeService', function ($scope,$state, HomeService) {
    	$scope.title = "Administrador"
      $scope.productos = [];
      $scope.producto = {};
      $scope.search={};
      $scope.template = '';
      $scope.user = {};
      $scope.subarreglo_cantidad =[];
      $scope.nombre_producto = [];
      $scope.cantidad_prodcuto =[];
      $scope.getProductos = function(){
        HomeService.GetProductos().then(function(response){
          $scope.productos = response.data;
          $scope.subarreglo_cantidad=[];
          for (var i = 0; i<$scope.productos.length; i++) {
             $scope.subarreglo_cantidad.push([$scope.productos[i]["descripcion"],$scope.productos[i]["cantidad"]]);
              $scope.nombre_producto.push($scope.productos[i]["descripcion"]);
             $scope.cantidad_prodcuto.push($scope.productos[i]["cantidad"]);
          };
          console.log($scope.nombre_producto);
          $scope.grafica_producto1();
          $scope.graficaInventario(); 
        }).catch(function(err){
          alert('Error fetching productos')
        });
      }
      $scope.getProductos();
      $scope.addProductos = function(){
        console.log($scope.producto);
        HomeService.PostProductos($scope.producto).then(function(response){
          console.log(response.data);
          $scope.getProductos();
          console.log($scope.producto.fecha_venc);
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

      /*¨grafica para productos disponibles*/
      $scope.grafica_producto1 = function () {
            var serie1 =[["Honduras",10],["Nicaragua",15],["Panama",50]];
            $('#container1').highcharts({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie'
                },
                title: {
                    text: 'Ingresando data a la grafica'
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                            style: {
                                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                            }
                        }
                    }
                },
                series: [{
                    name: "Brands",
                    colorByPoint: true,
                    data:  $scope.subarreglo_cantidad
                }]
            });
      };
      $scope.grafica_producto1();
      $scope.graficaInventario = function () {
            
            $('#container_inventario').highcharts({
                chart: {
                    type: 'bar'
                },
                title: {
                    text: 'Control Inventario'
                },
                subtitle: {
                    text: 'Productos en Existencia'
                },
                xAxis: {
                    categories: $scope.nombre_producto,
                    title: {
                        text: null
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Cantidad (Unidad)',
                        align: 'high'
                    },
                    labels: {
                        overflow: 'justify'
                    }
                },
                tooltip: {
                    valueSuffix: ' Unidades'
                },
                plotOptions: {
                    bar: {
                        dataLabels: {
                            enabled: true
                        }
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'top',
                    x: -40,
                    y: 80,
                    floating: true,
                    borderWidth: 1,
                    backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
                    shadow: true
                },
                credits: {
                    enabled: false
                },
                series: [{
                    name: "Cantidad",
                    colorByPoint: true,
                     data: $scope.cantidad_prodcuto
                }]
            });
        };
        $scope.graficaInventario(); 
  }]);
