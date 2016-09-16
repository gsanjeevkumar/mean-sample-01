angular.module('LeadsService', []).factory('Leads', ['$http', function($http){

    return {

        get: function(){

        },
        create: function(leadsData){
            return $http.post('/api/leads', leadsData);
        },
        delete: function(id){
            return $http.delete('/api/leads/' + id);
        }
    }
}]);