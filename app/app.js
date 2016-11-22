// [] - dependencies
var myApp = angular.module('myApp', []);

myApp.config(function() {
  console.log('Before your app runs do CONFIG');
})

myApp.run(function() {
  console.log('When your app runs do RUN')
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
      rate: 50,
      available: true
    },
    {
      name: 'Kate',
      belt: 'black',
      rate: 30,
      available: true
    },
    {
      name: 'Folko',
      belt: 'orange',
      rate: 10,
      available: true
    },
    {
      name: 'Daria',
      belt: 'green',
      rate: 60,
      available: false
    }
  ];
}])
