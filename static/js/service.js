var backendServices = angular.module('backendServices', ['ngResource']);

backendServices.factory('Backend', ['$resource',
  function($resource){

    var service = {};


    service.userService = function() {
        return {
            save: function(user, success, failure) {

                return $resource('/api/user/signin').save(user, function(data) {
                    if (data.hasOwnProperty('errors')) {
                        console.log(data.errors);
                        failure(data.errors);

                    } else {
                        console.log(data);
                        success(data);
                    }
                });
            },

            login: function(user, success, failure) {

                return $resource('/api/user/signup').save(user, function(data) {
                    if (data.hasOwnProperty('errors')) {
                        failure(data.errors);

                    } else {
                        console.log(data);
                        success(data);
                    }
                });
            },

        };
    };
    return service;
  }]);