'use strict';


// Declare app level module which depends on filters, and services
var myEmag = angular.module('myEmag', [
  'ngRoute',
  'ngAnimate',
  'emagControllers'
]);

myEmag.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      // when('/prev', {
      //   templateUrl:'partials/page2.html', 
      // }).
  		when('/', {
  		  templateUrl:'partials/page1.html' ,
  		}).
      //something's fucky with this function. It was breaking routprovider when I listed the prev button route after it. 
  		when('/:pageNum', {
        templateUrl: function(params){ return 'partials/page' + params.pageNum + '.html'; },
  		}).
     
 	otherwise({redirectTo: '/view'});
}]);

//Controllers

var emagControllers = angular.module ('emagControllers', []);

emagControllers.controller('ThumbnailCtrl', ['$scope', '$http', '$location',function($scope, $http, $location){
	//get the json data
  $http.get('json/magazine.json').success(function(data) {
      $scope.pages = data;
    });

    $scope.activePage = 1;
    // get the page_num value through the click event.
    $scope.clickThumb = function(value) {
      //assign the page_num to the var activePage;
     	$scope.activePage = value;

//attempting to code for prev and next
      };
      $scope.clickPrev = function(){

      var prevPage = $scope.activePage-1;
      $scope.activePage = prevPage;

      var loc = '/' + prevPage.toString();
      console.log( $location.path(loc));
      $location.path(loc);

      };

     
}]);

//Attempting to provide a variable to the templateURL in myEmag.config based on the active page.
// !! need to somehow access the scope of the emagController.not sure this is the solution 
// var emagProviders = angular.module ('emagProviders', []);
// emagProviders.provider('URLConfig', function() {
//     return 'partials/page1.html';
// });   



//Filters 
//attempted to limit the number of pagination tiles via filter, but this altered the model
// var emagFilters = angular.module('emagFilters',[]);
// emagFilters.filter('filterThumbs', function()
// {
//   return function (items, showSmallSet)
//   {
//         var range = 4;
//         var filtered = [];
//         for (var i = 0; i < items.length ; i++) 
//         {
//             var item = items[i];
//             for(var j = 0; j < range; j++)
//             {
//                 if(item.page_num == j )
//                 {
//                    filtered.push(item);
//                 }
//             }
//         }
//             console.log(filtered);
//      return filtered;
//   };
// });


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