'use strict';
/*--------------------------
  My Local URL: http://localhost6:8888/angular-seed-emag/app/#/view/4
  --------------------------*/

// Declare app level module which depends on filters, and services
var myEmag = angular.module('myEmag', [
  'ngRoute',
  'ngAnimate',
  'emagControllers',
  'emagFactories'
]);

// Adding a factory to keep track of state. Code courtesy of
// http://onehungrymind.com/building-a-website-with-angularjs-pt-2-now-with-state/
// https://www.youtube.com/watch?v=WEGppmA9URM#t=26
// 
var emagFactories = angular.module ('emagFactories', []);

emagFactories.factory('StateService', function(){
  var activePage = 1;
  var getActivePage = function(){
    return activePage;
  };
  var setActivePage = function(pg){
    activePage = pg;
    console.log(activePage);
  };
  return {
      getActivePage: getActivePage,
      setActivePage: setActivePage
    };
    
  });

myEmag.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  		when('/view/', {
  		templateUrl:'partials/page1.html' ,
  		}).
      when('/view/2', {
      templateUrl:'partials/page2.html' ,
      }).
      when('/view/3', {
      templateUrl:'partials/page13.html' ,
      }).
      //something's fucky with this function. It was breaking routprovider when I listed the prev button route after it.
      //only alternative I know of is a verbose listing of each html page
  		// when('/view/:pageNum', {
    //     templateUrl: function(params){ return 'partials/page' + params.pageNum + '.html';} 
  		// }).
     
 	otherwise({redirectTo: '/view'});
}]);

//Controllers

var emagControllers = angular.module ('emagControllers', []);

emagControllers.controller('ThumbnailCtrl', ['$scope', 'StateService', '$http', '$location', '$route', '$routeParams', function($scope, StateService, $http, $location, $route, $routeParams){
   //initialize variables
  $scope.pages = {};

  //get the json data
  $http.get('json/magazine.json').success(function(data) {
      $scope.pages = data;
    });
  $scope.activePage = StateService.getActivePage;

  $scope.updateActivePage = function(value){
      StateService.setActivePage(value);
  };
  $scope.applyBorder = function(value){
    if(value == $scope.activePage()){
      return 'true';
    }
  };
  $scope.showThumb = function(value){
    if ((value >= $scope.activePage() - 1) && (value <= $scope.activePage() + 1)) {
      return true;
    }
  };
  //Logic for page buttons
  $scope.clickThumb = function(value) {
    //assign the page_num to the var activePage;
    //****This is the state****//
   	//$scope.activePage = value;
    //*************************//
    $scope.updateActivePage(value);
  };

  //Logic for prev/next buttons. Could use some refactoring
  $scope.advanceSinglePage = function(direction){
    if(direction == 'prev'){
      var prevPage = $scope.activePage()-1;
      if (prevPage > 0 ){
        $scope.updateActivePage(prevPage);
      }
    }else if(direction == 'next'){
      var nextPage = $scope.activePage()+1;
      if (nextPage <= $scope.pages.length ){
        $scope.updateActivePage(nextPage);
      }
    }
    //concat the new url provided by the function logic
    //and feed it into the $location service. This updates the route.
    var loc = '/view/' + $scope.activePage().toString();
    console.log(loc);
    $location.path(loc);
  };    
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