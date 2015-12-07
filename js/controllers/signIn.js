'use strict';

// sign in controller
App.controller('SignInCtrl', ['$scope', '$http', function($scope, $http) {
    
    Parse.initialize('kiABolVJcRyVxfDJjHtKQwC4yx8nWaX7OFxGIXbe',
            'iSpL6lpjEo3IJS5Im7UU2N0rv6RI4St8omwyv9fp');

    var currentUser = Parse.User.current();
    if (currentUser) {
        // change router location to /
    } else {
        console.log('user not signed in');
    }

    $scope.siUsername = '';
    $scope.siPassword = '';
    $scope.processSignin = function() {
        console.log($scope.siUsername);
        console.log($scope.siPassword);
    };

    $scope.suUsername = '';
    $scope.suPassword = '';
    $scope.suEmail = '';
    $scope.processSignup = function() {
        console.log($scope.suUsername);
        console.log($scope.suPassword);
        console.log($scope.suEmail);
    };

}]);