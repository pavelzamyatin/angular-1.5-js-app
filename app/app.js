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
myApp.controller('MyFirstController', ['$scope', function($scope) {
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

  $scope.list = [
    {
      name: 'Corw',
      belt: 'blue',
      rate: 10,
      available: true,
      thumb: 'content/img/crw.png'
    },
    {
      name: 'Kate',
      belt: 'black',
      rate: 30,
      available: true,
      thumb: 'content/img/kate.png'
    },
    {
      name: 'Ackerman',
      belt: 'orange',
      rate: 90,
      available: true,
      thumb: 'content/img/acker.png'
    },
    {
      name: 'Dmitry',
      belt: 'green',
      rate: 60,
      available: false,
      thumb: 'content/img/dima.png'
    }
  ];
}])
