'use strict';

// home page controller
App.controller('HomeCtrl', ['$scope', '$http', 'homeSearch', function($scope, $http , homeSearch) {
    $scope.saveSearch = function(word){
    	homeSearch.toSearch = word; 
    };
}]);