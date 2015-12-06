'use strict';


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
	console.log("in search");


}])

.controller('DetailCtrl', ['$scope', '$http',function($scope, $http) {

	console.log("in detail");

}]);

console.log(myApp);

