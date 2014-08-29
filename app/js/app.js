'use strict';


// Declare app level module which depends on filters, and services
var myEmag = angular.module('myEmag', [
  'ngRoute',
  'emagControllers'
]);

myEmag.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  		when('/view', {
  			templateUrl:'partials/page.html', 
  			controller: 'ThumbnailCtrl'
  		}).
  		when('/view/:pageNum', {

  		}).
 	otherwise({redirectTo: '/view'});
}]);

//Controllers

var emagControllers = angular.module ('emagControllers', []);

emagControllers.controller('ThumbnailCtrl', ['$scope', '$http', function($scope, $http){
	$http.get('json/magazine.json').success(function(data) {
      $scope.pages = data;
    });
    $scope.limitVal = 5;
    $scope.path = 'page_01.jpg';
    $scope.clickThumb = function(value) {
     	$scope.activePage = value;
      $scope.path = $scope.pages[value].image.toString();
            console.log($scope.path);
    };  

  


    // $scope.bigPage = function () {
    //   angular.forEach(pages, function(value, key) {
    //     console.log('for each called');
    //   });
    
}]);
/*!
 * IE10 viewport hack for Surface/desktop Windows 8 bug
 * Copyright 2014 Twitter, Inc.
 * Licensed under the Creative Commons Attribution 3.0 Unported License. For
 * details, see http://creativecommons.org/licenses/by/3.0/.
 */

// See the Getting Started docs for more information:
// http://getbootstrap.com/getting-started/#support-ie10-width

(function () {
  'use strict';
  if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style')
    msViewportStyle.appendChild(
      document.createTextNode(
        '@-ms-viewport{width:auto!important}'
      )
    )
    document.querySelector('head').appendChild(msViewportStyle)
  }
})();