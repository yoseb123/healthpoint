'use strict';

// hospital detail controller
App.controller('DetailCtrl', ['$scope', '$http', '$sce', '$filter', '$stateParams', 
    function($scope, $http, $sce, $filter, $stateParams) {
    $scope.userId = Parse.User.current().id;

    // get general hospital info
    $http.get('js/data/geninfo.json').then(function(response) {
        $scope.hospitals = response.data.data;
        $scope.hospital = $filter('filter')($scope.hospitals, function(hospital) {
            return hospital[8] === $stateParams.id;
        }, true)[0];
        $scope.hospitalId = $scope.hospital[1];
        $scope.reviews = [];

        $scope.updateReviews = function() {
            // query for all reviews for the hospital with id
            var Post = Parse.Object.extend('Post');
            var query = new Parse.Query(Post);
            query.equalTo('hospitalId', $scope.hospitalId);
            query.find({
                success: function(results) {
                    $scope.$apply(function () {
                        $scope.reviews = results;
                    });
                    $scope.setAverageRatings();
                },
                error: function(error) {
                    console.log('Error: ' + error.code + 
                        ' ' + error.message);
                }
            });
        };

        // sets the average ratings by
        // going through the reviews to take 
        // the average of all rating categories
        $scope.setAverageRatings = function() {
            var avgClean = 0,
                avgQuiet = 0,
                avgPain = 0,
                avgDoctor = 0,
                avgNurse = 0;

            for (var i = 0; i < $scope.reviews.length; i++) {
                avgClean += $scope.reviews[i].get('clean');
                avgQuiet += $scope.reviews[i].get('quiet');
                avgPain += $scope.reviews[i].get('pain');
                avgDoctor += $scope.reviews[i].get('doctor');
                avgNurse += $scope.reviews[i].get('nurse');
            }

            $('#avgClean').raty({
                score: avgClean / $scope.reviews.length,
                readOnly: true
            });
            $('#avgQuiet').raty({
                score: avgQuiet / $scope.reviews.length,
                readOnly: true
            });
            $('#avgPain').raty({
                score: avgPain / $scope.reviews.length,
                readOnly: true
            });
            $('#avgDoctor').raty({
                score: avgDoctor / $scope.reviews.length,
                readOnly: true
            });
            $('#avgNurse').raty({
                score: avgNurse / $scope.reviews.length,
                readOnly: true
            });
        };

        $scope.deleteReview = function(review) {
            review.destroy({
                success: function(myObject) {
                    console.log('deleted review: ' + review.id);
                    $scope.updateReviews();
                },
                error: function(myObject, error) {
                    console.log(error.message);
                }
            });
        };

        // init raty stars for review
        $('#reviews-container .raty').raty({
            score: 0
        });

        // used for input for review post
        $scope.review = {
            title: '',
            body: ''
        };

        // posts a review to parse
        $scope.postReview = function() {
            var cleanRating = $('#raty-clean').raty('score'),
                quietRating = $('#raty-quiet').raty('score'),
                painRating = $('#raty-pain').raty('score'),
                doctorRating = $('#raty-doctor-comm').raty('score'),
                nurseRating = $('#raty-nurse-comm').raty('score');

            // Create a new post
            var user = Parse.User.current();
            var Post = Parse.Object.extend('Post');
            var post = new Post();
            post.set('hospitalId', $scope.hospitalId);
            post.set('title', $scope.review.title);
            post.set('body', $scope.review.body);
            post.set('clean', cleanRating || 0);
            post.set('quiet', quietRating || 0);
            post.set('pain', painRating || 0);
            post.set('doctor', doctorRating || 0);
            post.set('nurse', nurseRating || 0);
            post.set('user', user);
            post.save(null, {
                success: function(post) {
                    $scope.review.title = '';
                    $scope.review.body = '';
                    $scope.updateReviews();
                }
            });
        };

        //  make initial request for reviews
        $scope.updateReviews();

        // utility functions
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

        $scope.mapURL = function() {
            var name = $scope.hospital[9];
            var url = 'https://www.google.com/maps/embed/v1/place?' + 
                'key=AIzaSyAnezpngkfubjHIWnrZNCmhGv-_IzyLjMs&q=' +
                name;
            return $sce.trustAsResourceUrl(url);
        };
    });
}]);