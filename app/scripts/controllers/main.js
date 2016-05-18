'use strict';

/**
 * @ngdoc function
 * @name tdfrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tdfrontApp
 */
angular.module('tdfrontApp')
  .controller('MainCtrl', function ($scope) {
      $scope.todos = ['Jeden', 'Dwa', 'Trzy', 'Cztery'];
      $scope.addTodo = function () {
        $scope.todos.push($scope.todo);
        $scope.todo = '';
      };
  });
