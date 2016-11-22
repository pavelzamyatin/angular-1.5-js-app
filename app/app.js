// [] - dependencies
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {

  $routeProvider
    .when('/home', {
      templateUrl: 'views/home.html'
    })
    .when('/list', {
      templateUrl: 'views/list.html',
      controller: 'MyFirstController'
    })
    .otherwise({
      redirectTo: '/home'
    })

})

myApp.run(function() {
})

// [] - dependencies, include $scope and func to prevent any conflict
myApp.controller('MyFirstController', ['$scope', '$http', function($scope, $http) {
  // $scope.message = 'Hey, whatsapp, bro?';

  // remove element from the list
  $scope.removePerson = function(person) {
    var personIndex = $scope.list.indexOf(person);
    // array.splice(index,howmany);
    var removedPerson = $scope.list.splice(personIndex, 1)
    console.log(removedPerson[0]);
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

  $http .get('data/list.json')
        .success(function(data) {
          $scope.list = data;
        })

  // convert array of objects into the json file structure
  console.log(angular.toJson($scope.list));

}])
