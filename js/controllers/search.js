'use strict';

// search controller
App.controller('SearchCtrl', ['$scope', '$http','homeSearch','$filter',function($scope, $http, homeSearch, $filter) {
    $scope.searchQuery = homeSearch.toSearch;
    $scope.sortingCriteria = '';
    $http.get('js/data/data.json').then(function(response) {
        $scope.hospitals = []; 
        $scope.hospitalsDataSet = response.data;
        for (var i = 0; i < $scope.hospitalsDataSet[0].data.length; i++) {
        	var hospital = $scope.hospitalsDataSet[0].data[i];
            $scope.hospitals.push(hospital);
        };
    });

    $http.get('js/data/surveys.json').then(function(response) {
        $scope.surveys = response.data.data;
        for (var i = 0; i < $scope.hospitals.length; i++) {
        	var hospital = $scope.hospitalsDataSet[0].data[i];
	        var cleanRating = $filter('filter')($scope.surveys, function(survey) {
	        	if (survey[11] == 'H_CLEAN_STAR_RATING' && survey[8] == hospital[8]) {
	                hospital.push(survey[13]);
	            }
	        }, true)[0];

	        var quietRating = $filter('filter')($scope.surveys, function(survey) {
	            if (survey[11] == 'H_QUIET_STAR_RATING' && survey[8] == hospital[8]) {
	                hospital.push(survey[13]);
	            }
	        }, true)[0];

	        var painRating = $filter('filter')($scope.surveys, function(survey) {
	            if (survey[11] == 'H_COMP_4_STAR_RATING' && survey[8] == hospital[8]) {
	                hospital.push(survey[13]);
	            }
	        }, true)[0];

	        var doctorRating = $filter('filter')($scope.surveys, function(survey) {
	            if (survey[11] == 'H_COMP_2_STAR_RATING' && survey[8] == hospital[8]) {
	                hospital.push(survey[13]);
	            }
	        }, true)[0];

	        var nurseRating = $filter('filter')($scope.surveys, function(survey) {
	            if (survey[11] == 'H_COMP_1_STAR_RATING' && survey[8] == hospital[8]) {
	                hospital.push(survey[13]);
	            }
	        }, true)[0];

	        $scope.hospitalsDataSet[0].data[i] = hospital;
	    };
    });

}]);