angular.module('services', [])
.factory('Leads', function($http){
    return{
        get: function(){
            return $http.get('/api/leads');
        },
        create: function(leadsData){
            return $http.post('/api/leads', leadsData);
        },
        delete: function(id){
            return $http.delete('/api/leads' + id);
        }
    }
});