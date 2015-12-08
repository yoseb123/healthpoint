'use strict';

App.controller('NavController', ['$scope', '$rootScope', function($scope, $rootScope) {
    var currentUser = Parse.User.current();

    $rootScope.userSignedIn = false;
    if (currentUser) {
        $rootScope.userSignedIn = true;
    }

    // logs out the currently logged in user (if there is one)
    $scope.processSignout = function() {
        Parse.User.logOut();
        $rootScope.userSignedIn = false;
        console.log('User signed out');
    };
}]);