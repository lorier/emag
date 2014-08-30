'use strict';


// Declare app level module which depends on filters, and services
var myEmag = angular.module('myEmag', [
  'ngRoute',
  'emagControllers',
  'emagFilters'
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
    // I want the number of thumbs shown to include 2 before and 2 after the one clicked, so a total of 5
    // The thumbails shown will update as soon as the user clicks on one.
    // The array math:
    // pages objects = 12.
    // if the user click xvalue, resultArray =  pages.splice(xvalue-2, 5)
    // how do I bookend for the end of the array?

    $scope.path = 'page_01.jpg';
    $scope.clickThumb = function(value) {
     	$scope.activePage = value;
      $scope.path = $scope.pages[value].image.toString();
            // console.log($scope.path);
    };
    // function updatePageRange($scope){
    //   var clickedPage = $scope.activePage;
    //   var }

    // $scope.bigPage = function () {
    //   angular.forEach(pages, function(value, key) {
    //     console.log('for each called');
    //   });
}]);


//Filters 

var emagFilters = angular.module('emagFilters',[]);

emagFilters.filter('filterThumbs', function()
{
  return function (items, showSmallSet)
  {
        var range = 4;
        var filtered = [];
        for (var i = 0; i < items.length ; i++) 
        {
            var item = items[i];
            for(var j = 0; j < range; j++)
            {
                if(item.page_num == j )
                {
                   filtered.push(item);
                }
            }
        }
            console.log(filtered);
     return filtered;
  };
});


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