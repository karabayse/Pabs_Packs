var myApp = angular.module('myApp', ['ngRoute', 'chart.js', 'ui.bootstrap']);
/// Routes ///

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/home.html',
      controller: "LoginController"
    })
    .when('/register', {
      templateUrl: '/views/register.html',
      controller: "LoginController"
    })
    .when('/dashboard', {
      templateUrl: '/views/dashboard.html',
      controller: "DashboardController as dc"
    })
    .when('/inventory', {
      templateUrl: '/views/inventory.html',
      controller: "InventoryController as ic"
    })
    .when('/tracker', {
      templateUrl: '/views/tracker.html',
      controller: "TrackerController as tc"
    })
    .otherwise({
      redirectTo: 'home'
    });
}]);
