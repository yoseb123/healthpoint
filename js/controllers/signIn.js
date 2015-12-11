'use strict';

// sign in controller
App.controller('SignInCtrl', ['$scope', '$rootScope', '$http', '$state', function($scope, $rootScope, $http, $state) {

    var currentUser = Parse.User.current();
    if (currentUser) {
        $state.go('home');
    }

    $scope.siUsername = '';
    $scope.siPassword = '';
    $scope.processSignin = function() {
        logInUser($scope.siUsername, $scope.siPassword);
    };

    $scope.suUsername = '';
    $scope.suPassword = '';
    $scope.suPasswordConfirm = '';
    $scope.suEmail = '';
    $scope.processSignup = function() {
        if ($scope.suPassword !== $scope.suPasswordConfirm) {
            alert('Passwords must match');
        } else {
            var formFieldObj = {
                username: $scope.suUsername,
                password: $scope.suPassword,
                email: $scope.suEmail
            };

            createParseUser(formFieldObj);
        }
    };

    // Creates a parse user using the passed formFieldObj
    // A formFieldObj is a JavaScript object that contains
    // a key for each: username, password, email
    function createParseUser(formFieldObj) {
        var user = new Parse.User();
        user.set('username', formFieldObj.username);
        user.set('password', formFieldObj.password);
        user.set('email', formFieldObj.email);

        user.signUp(null, {
            success: function(user) {
                $rootScope.userSignedIn = true;
                $state.go('home');
            },
            error: function(user, error) {
                alert('Error: ' + error.code + ' ' + error.message);
            }
        });
    }

    // Logs in the Parse user with the passed username and password
    function logInUser(username, password) {
        Parse.User.logIn(username, password, {
            success: function(user) {
                $rootScope.userSignedIn = true;
                $state.go('home');
            },
            error: function(user, error) {
                alert('Error: ' + error.code + ' ' + error.message);
            }
        });
    }

}]);