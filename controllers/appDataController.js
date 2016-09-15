angular.module('controllers', [])
    .controller('appDataController', ['$scope', Leads, '$http', function($scope, $http) {
	
    $scope.title = "Data Points!";
    
    // Leads.get().success(function(data){
    //   console.log('success ... function');
    //   $scope.leads = data;
    // // });
    // $scope.appData = [
    //   { FirstName: 'John', LastName: 'lname', Email:'0email' },
    //   { FirstName: 'fname01', LastName: 'lname', Email:'1email' },
    //   { FirstName: 'fname02', LastName: 'lname', Email:'2email' },
    //   { FirstName: 'fname01', LastName: 'lname', Email:'3email' }
    // ];

    $http.get('/api/leads').success(function(data){
        $scope.appData = data;
        console.log('called the leads get api endpoint');
    })

    // $http.get('/api/leads').success(function(data){
    //   $scope.leads = data;
    // }).error(function(data){
    //   console.log('Error' + data);
    // });

}]);