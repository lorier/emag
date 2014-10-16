'use strict';

// Declare app level module which depends on filters, and services
var myEmag = angular.module('myEmag', [
  'ngRoute',
  'ngAnimate',
  'emagControllers'
]);

myEmag.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  		when('/view/', {
  		templateUrl:'partials/page1.html' ,
  		}).
      //something's fucky with this function. It was breaking routprovider when I listed the prev button route after it.
      //only alternative I know of is a verbose listing of each html page
  		when('/view/:pageNum', {
        templateUrl: function(params){ return 'partials/page' + params.pageNum + '.html'; },
  		}).
     
 	otherwise({redirectTo: '/view'});
}]);

//Controllers

var emagControllers = angular.module ('emagControllers', []);

emagControllers.controller('ThumbnailCtrl', ['$scope', '$http', '$location', '$route', '$routeParams', function($scope, $http, $location, $route, $routeParams){
   //initialize variables
  $scope.pages = {};
  $scope.activePage = 1;

  //get the json data
  $http.get('json/magazine.json').success(function(data) {
      $scope.pages = data;
    });
  
  $scope.applyBorder = function(value){
    if(value == $scope.activePage){
      return 'true';
    }
  };

  //Logic for page buttons
  $scope.clickThumb = function(value) {
    //assign the page_num to the var activePage;
    
    //****This is the state****//
   	$scope.activePage = value;
    //*************************//
  };

  //Logic for prev/next buttons. Could use some refactoring
  $scope.advanceSinglePage = function(direction){
    if(direction == 'prev'){
      var prevPage = $scope.activePage-1;
      if (prevPage > 0 ){
        $scope.activePage = prevPage;
      }
    }else if(direction == 'next'){
      var nextPage = $scope.activePage+1;
      if (nextPage <= $scope.pages.length ){
        $scope.activePage = nextPage;
      }
    }
    //concat the new url provided by the function logic
    //and feed it into the $location service. This updates the route.
    var loc = '/view/' + $scope.activePage.toString();
    $location.path(loc);
  };

    //use $routeParams to load the current URL - based on p592 in Pro AngularJS
    //-$routParams comes back empty. -apparently this will only work if 
    //the controller to which it is attached isn inside ng-view. Ditching this for now.
    // $scope.$on("$routeChangeSuccess", function(){
    //   if($location.path().indexOf("/view") == 0) {
    //     var id = $routeParams["page_num"];
    //     console.log('id: ' + angular.toJson($routeParams);
    //     for (var i = 0; i < $scope.pages.length; i++){
    //       if ($scope.pages[i].page_num == id){
    //         $scope.activePage = $scope.pages[i];
    //         break;
    //       }
    //     } 
    //   }    
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