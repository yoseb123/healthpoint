'use strict';
var DATA_START_INDEX = 8,
    DATA_END_INDEX = 16;



var myApp = angular.module('MyApp', ['ui.router', 'ngSanitize'])

	.config(function($stateProvider){
	$stateProvider
		.state('home', {
			url: '/', //"root" directory
			templateUrl: 'partials/home.html',
			controller: 'HomeCtrl'
		})
		.state('search', {
			url: '/search',
			templateUrl: 'partials/search.html',
			controller: 'SearchCtrl'
		})	
		.state('detail', {
			url: '/hospital/{id}', //need specific id variable name
			templateUrl: 'partials/hospital-detail.html',
			controller: 'DetailCtrl'
		});


})

.controller('HomeCtrl', ['$scope', '$http',function($scope, $http) {
	console.log("in Home");


}])
.controller('SearchCtrl', ['$scope', '$http',function($scope, $http) {
	

	$http.get('js/data/data.json').then(function(response) {
		$scope.hospitals = []; 
 		$scope.hospitalsDataSet = response.data;
 		for (var i = 0; i < $scope.hospitalsDataSet[0].data.length; i++) {
 			console.log($scope.hospitalsDataSet[0].data[i]);
 			$scope.hospitals.push($scope.hospitalsDataSet[0].data[i]);

 		};
 		$scope.hospitalInfo = $scope.hospitalsDataSet.data;
 		console.log($scope.hospitals);

 	});
}])

.controller('DetailCtrl', ['$scope', '$http', '$sce', '$filter', '$stateParams',function($scope, $http, $sce, $filter, $stateParams) {

	console.log("in detail");

	$http.get('js/data/geninfo.json').then(function(response) {
        $scope.hospitals = response.data.data;
        $scope.hospital = $filter('filter')($scope.hospitals, function(hospital) { // filter the array
            return hospital[8] == $stateParams.id;
        }, true)[0]; // save the 0th result
    });


console.log(myApp);

    $scope.lowercase = function(string) {
        return string.replace(/\w\S*/g, function(word) {
        	if (word.length > 2) {
        		return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
        	} else {
        		return word;
        	}
        });
    };

    $scope.cityState = function(hospital) {
    	var city = hospital[11].charAt(0).toUpperCase() + hospital[11].substr(1).toLowerCase();
    	var state = hospital[12];
    	return city + ', ' + state + ' '+ hospital[13]; 
    };

    $scope.phone = function(number) {
    	return '(' + number.substr(0,3) + ')-' + number.substr(3,3) + '-' + number.substr(6,4); 
    };

    $scope.mapURL = function(hospital) {
        var name = hospital[9]
    	var url = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyAnezpngkfubjHIWnrZNCmhGv-_IzyLjMs&q='
    	+ name;
    	return $sce.trustAsResourceUrl(url);
    };

    $http.get('js/data/surveys.json').then(function(response) {
        $scope.surveys = response.data.data;
        $scope.cleanRating = $filter('filter')($scope.surveys, function(survey) {
            return survey[8] == $stateParams.id;
        }, true)[0];
        $scope.quietRating = $filter('filter')($scope.surveys, function(survey) {
            if (survey[11] == 'H_QUIET_STAR_RATING') {
                return survey[8] == $stateParams.id;
            }
        }, true)[0];
        $scope.painRating = $filter('filter')($scope.surveys, function(survey) {
            if (survey[11] == 'H_COMP_4_STAR_RATING') {
                return survey[8] == $stateParams.id;
            }
        }, true)[0];
        $scope.doctorRating = $filter('filter')($scope.surveys, function(survey) {
            if (survey[11] == 'H_COMP_2_STAR_RATING') {
                return survey[8] == $stateParams.id;
            }
        }, true)[0];
        $scope.nurseRating = $filter('filter')($scope.surveys, function(survey) {
            if (survey[11] == 'H_COMP_1_STAR_RATING') {
                return survey[8] == $stateParams.id;
            }
        }, true)[0];
    });

    $scope.barWidth = function(rating) {
        return 'width:' + (rating * 20) + '%';
    };
}])