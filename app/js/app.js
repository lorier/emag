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
    //console.log(activePage);
  };
  return {
      getActivePage: getActivePage,
      setActivePage: setActivePage
    };   
  });
//This should be refactored when I figure out how to do it
myEmag.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  		when('/view/', {
  		templateUrl:'partials/page1.html' ,
  		}).
      when('/view/2', {
      templateUrl:'partials/page2.html' ,
      }).
      when('/view/3', {
      templateUrl:'partials/page3.html' ,
      }).
      when('/view/4', {
      templateUrl:'partials/page4.html' ,
      }).
      when('/view/5', {
      templateUrl:'partials/page5.html' ,
      }).
      when('/view/6', {
      templateUrl:'partials/page6.html' ,
      }).
      when('/view/7', {
      templateUrl:'partials/page7.html' ,
      }).
      when('/view/8', {
      templateUrl:'partials/page8.html' ,
      }).
      when('/view/9', {
      templateUrl:'partials/page9.html' ,
      }).
      when('/view/10', {
      templateUrl:'partials/page10.html' ,
      }).
      when('/view/11', {
      templateUrl:'partials/page11.html' ,
      }).
      when('/view/12', {
      templateUrl:'partials/page12.html' ,
      }).
      when('/view/13', {
      templateUrl:'partials/page13.html' ,
      }).
      when('/view/14', {
      templateUrl:'partials/page14.html' ,
      }).
      when('/view/15', {
      templateUrl:'partials/page15.html' ,
      }).
     	otherwise({redirectTo: '/view'});
}]);

//Controllers

var emagControllers = angular.module ('emagControllers', []);

emagControllers.controller('ThumbnailCtrl', ['$scope', 'StateService', '$http', '$location', '$route', '$routeParams', function($scope, StateService, $http, $location, $route, $routeParams){
   
   //initialize variables
  $scope.pages = {};
  $scope.pageCount = 0;
  $scope.activePage = StateService.getActivePage;
  $scope.thumbsPosition = '';
  $scope.isThumbsVisible = false;
  $scope.pageTransition = '';
  $scope.thumbTransition = '';
  
  //count number of objects in the json object
  //might need a polyfill for older browsers
  

  //get the json data
  $http.get('json/magazine.json').success(function(data) {
      $scope.pages = data;
      $scope.pageCount = Object.keys($scope.pages).length;
  });

  $scope.addSVG = function(){
    return "partials/target.svg";
  };

  $scope.setThumbsPosition = function(){
    //console.log($scope.thumbsPosition);
    if($scope.isThumbsVisible){
      $scope.thumbsPosition = "small";
    }else{
      $scope.thumbsPosition = "big";
    }
  };
  
  $scope.toggleThumbs = function() {
    $scope.isThumbsVisible = $scope.isThumbsVisible === false ? true: false;
    $scope.setThumbsPosition();
  };
  
  $scope.setPrevNextVisibility = function(value){
    if($scope.activePage() === value){
      return "hide-arrow";
    }else {
      return "visible";
    }
  };
  $scope.isFirstPage= function(){
    return $scope.activePage()===1;
  };
  
  $scope.isLastPage= function(){
    return $scope.activePage()===$scope.pages.length;
  };

  $scope.updateActivePage = function(value){
      StateService.setActivePage(value);
  };
  $scope.activeThumb = function(value){
    if(value == $scope.activePage()){
      return 'true';
    }
  };
  
  $scope.showThumb = function(value){
    if($scope.activePage() <= 2){
      if (value <= 3){
         return true;
      }
    }else if($scope.activePage() >= $scope.pages.length - 1){
      if (value >= $scope.pages.length - 2){
         return true;
      }
    }else
    if ((value >= $scope.activePage() - 1) && (value <= $scope.activePage() + 1)) {
      return true;
    }
  };

  //update page based on which thumbnail is clicked
  $scope.clickThumb = function(value) {
    $scope.updateActivePage(value);
    $scope.pageTransition = 'opacity';
    if(value !== 1 && value < $scope.pages.length){
      $scope.changeLoc($scope.activePage());   
    }
  };

  //Logic for prev/next buttons. Could use some refactoring
  $scope.advancePage = function(direction){
    if(direction == 'prev'){
      $scope.pageTransition  = "back";
      var prevPage = $scope.activePage()-1;
      if (prevPage > 0 ){
        $scope.updateActivePage(prevPage);
        $scope.changeLoc(prevPage);
      }
    }else if(direction == 'next'){
      $scope.pageTransition  = "forward";
      var nextPage = $scope.activePage()+1;
      if (nextPage <= $scope.pages.length ){
        $scope.updateActivePage(nextPage);
        $scope.changeLoc(nextPage);
      }
    }
  $scope.advanceThumbnails = function(direction){

  }
      //concat the new url provided by the function logic
      //and feed it into the $location service. This updates the route.
      //$routeProvider in .config will not work without this.
      };
      $scope.changeLoc = function(location){
        var loc = '/view/' + location;

        $location.path(loc);
       };
        $scope.$on('$viewContentLoaded', function() {
          runJQuery(StateService.getActivePage());
          runPeekOnMouseover($scope.activePage(),$scope.pageCount);
       });
      
      $scope.peekPrev = function() {
          var current = $scope.activePage();
          var prev =  current - 1;
        
          // console.log("peekPrev: prev value is: " + prev);

          if( current > 1 ){ 
            return "partials/page" + prev + ".html";
          } else {
            //console.log("You can't go before page1");
            // return "partials/page" + StateService.getActivePage() + ".html";
      }
     
     $scope.peekNext = function() {
            var current = $scope.activePage();
            var next = current + 1;
               //console.log("peekNext: next value is: " + next);
               // console.log($scope.pageCount);
            if( current < $scope.pageCount ){ 
              // console.log("peekNext: current page (" + current + ") is less than: " + $scope.pageCount);

              return "partials/page" + next + ".html";
            } else {
              //console.log("you've reached the last page");
              // return "partials/page" + StateService.getActivePage() + ".html";
            }
      };
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