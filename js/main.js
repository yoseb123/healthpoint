'use strict';

var App = angular.module('App', ['ui.router', 'ngSanitize']);

// Define front-end routes
App.config(function($stateProvider) {
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'partials/home.html',
			controller: 'HomeCtrl'
		})
		.state('search', {
			url: '/search',
			templateUrl: 'partials/search.html',
			controller: 'SearchCtrl'
		})	
		.state('detail', {
			url: '/hospital/{id}',  // need specific id variable name
			templateUrl: 'partials/hospital-detail.html',
			controller: 'DetailCtrl'
		})
		.state('signin', {
			url: '/signin',
			templateUrl: 'partials/signin.html',
			controller: 'SignInCtrl'
		});
});
