// [] - dependencies
var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate']);

myApp.config(function($routeProvider) {

  $routeProvider
    .when('/home', {
      templateUrl: 'views/home.html',
      controller: 'ListController'
    })
    .when('/list', {
      templateUrl: 'views/list.html',
      controller: 'ListController'
    })
    .otherwise({
      redirectTo: '/home'
    })

})

myApp.run(function() {
})

// custom directive
myApp.directive('randomPerson', [function() {

  // restrict 'EA' - using dir as element && attribute
  return {
    restrict: 'E',
    scope: {
      list: '=',
      title: '='
    },
    // template: '<img class="icons" ng-src="{{list[random].thumb}}">',
    templateUrl: 'views/random.html',
    // replace custom tag with tag from random.html
    replace: true,
    // transclude content inside sustom directive
    transclude: true,
    controller: function($scope) {
      $scope.random = Math.floor(Math.random() * 4)
    }
  };

}])

// [] - dependencies, include $scope and func to prevent any conflict
myApp.controller('ListController', ['$scope', '$http', function($scope, $http) {
  // $scope.message = 'Hey, whatsapp, bro?';

  // remove element from the list
  $scope.removePerson = function(person) {
    var personIndex = $scope.list.indexOf(person);
    // array.splice(index,howmany);
    var removedPerson = $scope.list.splice(personIndex, 1)
    console.log(removedPerson[0]);
  }

  $scope.removeAll = function() {
    $scope.list = [];
  }

  // add element to the list using submit
  $scope.addPerson = function() {
    $scope.list.push({
      name: $scope.newPerson.name,
      belt: $scope.newPerson.belt,
      rate: parseInt($scope.newPerson.rate),
      available: true
    })

    // clean the form
    $scope.newPerson.name = '';
    $scope.newPerson.belt = '';
    $scope.newPerson.rate = '';
  }

  // get data from json file using $http
  $http .get('data/list.json')
        .success(function(data) {
          $scope.list = data;
        })

  // convert array of objects into the json file structure
  // console.log(angular.toJson($scope.list));

}])
