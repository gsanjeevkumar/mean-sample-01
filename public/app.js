var app = angular.module('ViewDataApp', []);

app.controller('appDataController', [ '$scope', function($scope) {
	$scope.title = "Welcome";
    $scope.appData = [
      { FirstName: 'fname01', LastName: 'lname', Email:'0email' },
      { FirstName: 'fname01', LastName: 'lname', Email:'1email' },
      { FirstName: 'fname01', LastName: 'lname', Email:'2email' },
      { FirstName: 'fname01', LastName: 'lname', Email:'3email' }
    ];
}]);