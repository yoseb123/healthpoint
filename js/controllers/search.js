'use strict';

// search controller
App.controller('SearchCtrl', ['$scope', '$http','homeSearch',function($scope, $http, homeSearch) {
    $scope.searchQuery = homeSearch.toSearch;
    $scope.sortingCriteria = '';
    $http.get('js/data/data.json').then(function(response) {
        $scope.hospitals = []; 
        $scope.hospitalsDataSet = response.data;

        $scope.updateReviews = function(hospital) {
            // query for all reviews for the hospital with id
            var Post = Parse.Object.extend('Post');
            var query = new Parse.Query(Post);
            query.equalTo('hospitalId', hospital[1]);
            query.find({
                success: function(results) {
                    $scope.$apply(function () {
                        $scope.reviews = results;
                    });
                    $scope.setAverageRatings(hospital);
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
        $scope.setAverageRatings = function(hospital) {
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

            hospital.push(Math.round((avgClean / $scope.reviews.length)*10)/10);
            hospital.push(Math.round((avgQuiet / $scope.reviews.length)*10)/10);
            hospital.push(Math.round((avgPain / $scope.reviews.length)*10)/10);
            hospital.push(Math.round((avgDoctor / $scope.reviews.length)*10)/10);
            hospital.push(Math.round((avgNurse / $scope.reviews.length)*10)/10);

        };

        for (var i = 0; i < $scope.hospitalsDataSet[0].data.length; i++) {
        	var hospital = $scope.hospitalsDataSet[0].data[i]
            $scope.hospitals.push(hospital);
            $scope.updateReviews(hospital)
        };
    });

}]);