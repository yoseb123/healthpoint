'use strict';

// search controller
App.controller('SearchCtrl', ['$scope', '$http',function($scope, $http) {
    $scope.sortingCriteria = '';
    console.log($scope.sortingCriteria);
    $http.get('js/data/data.json').then(function(response) {
        $scope.hospitals = []; 
        $scope.hospitalsDataSet = response.data;
        for (var i = 0; i < $scope.hospitalsDataSet[0].data.length; i++) {
            $scope.hospitals.push($scope.hospitalsDataSet[0].data[i]);
        };
    });

}]);