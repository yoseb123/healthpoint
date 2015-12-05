'use strict';

var $ = require('jquery'),
    data = require('./data/data'),
    constants = require('./lib/constants'),
    angular = require('angular');

var myApp = angular.module('myApp', [require('ui-router/release/angular-ui-router')]);

console.log(myApp);

// data.hospitals.data.forEach(function(hosp) {
//     console.log(hosp[constants.DATA_START_INDEX]);
//     console.log(hosp[constants.DATA_END_INDEX]);
// });
