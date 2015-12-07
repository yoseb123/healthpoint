'use strict';
var DATA_START_INDEX = 8,
    DATA_END_INDEX = 16;

var myApp = angular.module('MyApp', ['ui.router'])
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
			url: '/hospital/{id}',//need specific id variable name
			templateUrl: 'partials/hospital-detail.html',
			controller: 'DetailCtrl'
		})


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

.controller('DetailCtrl', ['$scope', '$http',function($scope, $http) {

	console.log("in detail");

}]);

console.log(myApp);

// data.hospitals.data.forEach(function(hosp) {
//     console.log(hosp[constants.DATA_START_INDEX]);
//     console.log(hosp[constants.DATA_END_INDEX]);
// });
