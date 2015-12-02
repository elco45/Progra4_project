angular.module('AngularScaffold.Controllers')
  .controller('UsersController', ['AuthService', '$scope', '$state', '$rootScope', '$sessionStorage',  
  	function (authService, $scope, $state, $rootScope, $sessionStorage) {
      $scope.user = {};
      $scope.$sessionStorage = $sessionStorage;
      $scope.title = "Login"

      $scope.logout = function(){
        authService.Logout().then(function(response){
          alert('logged out correctly');
          $sessionStorage.$reset();
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        })
      }

      $scope.login = function(user){
        authService.Login(user).then(function(response){
          $sessionStorage.currentUser = response.data;
          $scope.user = {};
          if ($sessionStorage.currentUser.tipo==="admin") {
            $state.go('admin');
          }else if($sessionStorage.currentUser.tipo==="vendedor"){
            $state.go('vendedor');
          }
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        });
      }

      $scope.goAdmin =function(){
        $state.go("admin")
      }
  }]);
