angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

    $routeProvider

        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        .when('/leads', {
            templateUrl: 'views/leads.html',
            controller: 'LeadsController'
        });

        $locationProvider.html5Mode(true);

}]);