'use strict';

// Declare app level module which depends on views, and components
var tripStoryApp = angular.module('tripStoryApp', [
  'ngRoute',
  'ngSanitize',
  'backendServices',
  'tripStoryApp.login',
  'tripStoryApp.register',
  'tripStoryApp.dashboard'
]);

tripStoryApp.config(['$routeProvider',
        function($routeProvider) {

    $routeProvider.otherwise({redirectTo: '/login'});
}]);

tripStoryApp.controller('MainController', ['$rootScope', '$location',
    function($rootScope, $location) {

      // check with service
      $rootScope.loggedIn = true;
      $rootScope.user = {username:'Martin'};
      if (!$rootScope.loggedIn) {
          $location.path('login');
      }

      this.logout = function() {

        //service
        delete $rootScope.loggedIn;
        delete $rootScope.user;

        $location.path('login');
      };
}]);
