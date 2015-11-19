var app = angular.module('AngularScaffold', ['ui.router', 'AngularScaffold.Services', 'AngularScaffold.Controllers']);

angular.module('AngularScaffold.Controllers', []);
angular.module('AngularScaffold.Services', []);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('vendedor');
	$stateProvider
        .state('vendedor', {
            url: '/vendedor',
            templateUrl: '/views/vendedor.html',
            controller: 'HomeController'
        });
        
}])
