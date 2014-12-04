'use strict';
/*--------------------------
  My Local URL: http://localhost6:8888/angular-seed-emag/app/#/view/4
  --------------------------*/

// Declare app level module which depends on filters, and services
var myEmag = angular.module('myEmag', [
  'ngRoute',
  'ngAnimate',
  'emagControllers',
  'emagFactories',
  'emagDirectives',
  'ngDialog'
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

//Adding directive to watch for the render completion of the 
//thumbnails
var emagDirectives = angular.module ('emagDirectives', []);

emagDirectives.directive('myRepeatDirective', function() {
  return function(scope, element, attrs) {
    if (scope.$last) {
          setTimeout(function(){
            //trigger jQuery code
            initThumbnailStops();  
          }, 1);
    }
  };
});


//This should be refactored when I figure out how to do it
//possible resource
//http://stackoverflow.com/questions/13681116/angularjs-dynamic-routing
myEmag.config(['$routeProvider', '$locationProvider', function($routeProvider, $location) {
  $routeProvider.
  		when('/view/1', {
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
     	otherwise({redirectTo: '/view/1'});

      $location.hashPrefix('!');
}]);

//Controllers

var emagControllers = angular.module ('emagControllers', []);

emagControllers.controller('mobileAlertCtrl', ['$scope', 'StateService', '$http', '$location', '$route', '$routeParams', 'ngDialog', function($scope, StateService, $http, $location, $route, $routeParams, ngDialog){
	$scope.soundValue = function(){
		return (500);
	}
	$scope.soundAlert = function(e){
		var dialogSound; 

		if(localStorage.playSound != 'false' && sessionStorage.getItem("iosSound") != 'true' && isMobile.any()){   //play or unknown
			
			 dialogSound  = ngDialog.open({
				 template: '\
	                <p>This presentation uses sound would you like to enable it?</p>\
	                <div class="ngdialog-buttons">\
	                    <button type="button" class="ngdialog-button ngdialog-button-secondary" ng-click="closeThisDialog(0)">No</button>\
	                    <button type="button" class="ngdialog-button ngdialog-button-primary" ng-click="closeThisDialog(1)">Yes</button>\
	                </div>',
				 plain: true,
				 controller: 'mobileAlertCtrl',
			     className: 'ngdialog-theme-default'
			 }); 
		
			 dialogSound.closePromise.then(function (data) {
				 if(data.value == 0){
					 sessionStorage.setItem("iosSound", "false");
					 localStorage.playSound = 'false';
					 $('li.nav-sound a .nav-holder').trigger('soundOff');
				 }else{
				 	sessionStorage.setItem("iosSound", "true");
					$('li.nav-sound a .nav-holder').trigger('soundOn');
				 }
			     console.log(data.id + ' has been dismissed.');
				 e.play();
			 });
		 }else{
		 	 e.play();
		 }
		
	}



}]);




emagControllers.controller('ThumbnailCtrl', ['$scope', 'StateService', '$http', '$location', '$route', '$routeParams', 'ngDialog', function($scope, StateService, $http, $location, $route, $routeParams, ngDialog){
   
   //initialize variables
  $scope.pages = {};
  $scope.pageCount = 0;
  $scope.activePage = StateService.getActivePage;
  // $scope.activePageVal = StateService.getActivePage();
  $scope.thumbsPosition = '';
  $scope.isThumbsVisible = false;
  $scope.pageTransition = 'forward';
  $scope.thumbTransition = '';
  $scope.currentTween;
  //count number of objects in the json object
  //might need a polyfill for older browsers
  

  //get the json data
  $http.get('json/magazine.json').success(function(data) {
      $scope.pages = data;
      $scope.pageCount = Object.keys($scope.pages).length;
  });

  $scope.addSVG = function(){
    return "partials/circlebutton.svg";
  };
  
  $scope.doYoutube = function(linkurl){
		 console.log("do dialog");
		 $scope.theme = 'ngdialog-theme-plain';

		 ngDialog.open({
			 template: '<iframe width="100%" height="100%" src="http://www.youtube.com/embed/'+linkurl+ '?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>',
			 plain: true,
		     className: 'ngdialog-theme-plain'
		 }); 
	 }
  $scope.doVimeo = function(linkurl){
		 console.log("do dialog");
		 $scope.theme = 'ngdialog-theme-plain';

		 ngDialog.open({
			 template: '<iframe src="//player.vimeo.com/video/'+linkurl+'?title=0" width="100%" height="100%" frameborder="0" title="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
			 plain: true,
		     className: 'ngdialog-theme-plain'
		 }); 
	 }

  $scope.toggleThumbs = function(event){
	  //check if open or closed http://mandarindrummond.com/articles/angular-css-toggle-no-controller/index.html
	  var target = angular.element(event.target)
	  target.parent().parent().parent().toggleClass( "stash" ); //naughty dom climbing
  };

  //the next 4 functions govern the 
  //forward and back arrows on the slides
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
  $scope.turnOffTargets = function(){
	$(".view-container .click-layer").on('click', function () {
		$(this).removeClass('clicked'); //turn off layer
		$('.view-container .clickme').removeClass('clicked'); //turn off buttons
		$('.view-container .clicktext').removeClass('clicked'); //turn off text!
	});
  }

  $scope.updateTween = function(theTL){
      $scope.currentTween = theTL;
  };
  $scope.stopTween = function(){
	  if($scope.currentTween != null){
	  	$scope.currentTween.stop();
	  }
      
  };

  $scope.updateActivePage = function(value){
      StateService.setActivePage(value);
  };
  
  $scope.advanceThumb = function(which, page){
      //fire jquery function
      advanceThumbnails(which, page);
  };

  //update the slide based on which thumbnail is clicked
  $scope.onThumbClick = function(value) {
    $scope.pageTransition = $scope.setSlideTransitionDirection(value);
    $scope.updateActivePage(value);
    if(value !== 1 && value < $scope.pages.length){
      $scope.changeSlide($scope.activePage());  
      setThumbstoCurrentSlide($scope.activePage());
    }
  };
  $scope.setSlideTransitionDirection = function(value){

    var whichWay
    if (value > $scope.activePage()){
      whichWay = "forward" 
    }else if (value < $scope.activePage()){
      whichWay = "back";
    }
    return whichWay;
  };

  //Logic for prev/next buttons on slides. Could use some refactoring
  $scope.moveSlide = function(direction){
	 // soundMachineClear();
    if(direction == 'prev'){
      $scope.pageTransition  = "back";
      var prevPage = $scope.activePage()-1;
      if (prevPage > 0 ){
        $scope.updateActivePage(prevPage);
        $scope.changeSlide(prevPage);
      }
    }else if(direction == 'next'){
      $scope.pageTransition  = "forward";
      var nextPage = $scope.activePage()+1;
      if (nextPage <= $scope.pages.length ){
        $scope.updateActivePage(nextPage);
        $scope.changeSlide(nextPage);

      }
    } 
    //calls jQuery function to set the correct thumbnail position
    setThumbstoCurrentSlide($scope.activePage());
  };

  //concat the new url. 
  //and feed it into the $location service. This updates the route.
  //$routeProvider in .config will not work without this.
  $scope.changeSlide = function(location){
    var loc = '/view/' + location;
    $location.path(loc);
	$scope.stopTween();
	 soundMachineClear();
   };

  $scope.$on('$viewContentLoaded', function() {
      //using the $location service to get the page number from the URL
      //this captures the new page value if the user types in the page number
      //in the address bar
      var urlSlice = parseInt($location.path().slice(6) || 1);
      StateService.setActivePage(urlSlice);
	  
	  runJQuery($scope.activePage()); // function in partials fires 
	  
      onContentLoaded($scope.activePage(),$scope.pageCount);
      setThumbstoCurrentSlide($scope.activePage());
   });


  $scope.peekPrev = function() {
      var current = $scope.activePage();
      var prev =  current - 1;
    
      if( current > 1 ){ 
        return "partials/page" + prev + ".html";
      } else {
        return;
      }
    };
 
 $scope.peekNext = function() {
    var current = $scope.activePage();
    var next = current + 1;
    if( current < $scope.pageCount ){ 
      return "partials/page" + next + ".html";
    } else {
      return;
    }
  };



/*
  $scope.overlayState = false;
  $scope.setTargetStater = function(){
   $scope.overlayState = ! $scope.overlayState;
  }
*/
  $scope.targetState = 'none';
  
  $scope.setTargetState = function(theElement){
	  if(theElement == null || $scope.targetState== theElement){
		  $scope.targetState = 'none';
	  }else{
		  $scope.targetState = theElement;
 	 }
  }




}]);






emagControllers.directive(
		"bnSlideShow",
		function() {  

			// I allow an instance of the directive to be hooked
			// into the user-interaction model outside of the
			// AngularJS context.
			// http://www.bennadel.com/blog/2440-creating-a-custom-show-hide-directive-in-angularjs.htm
			function link( $scope, element, attributes ) {

				// I am the TRUTHY expression to watch.
				var expression = attributes.bnSlideShow;

				// I am the optional slide duration.
				var duration = ( attributes.slideShowDuration || "fast" );


				// I check to see the default display of the
				// element based on the link-time value of the
				// model we are watching.
				if ( ! $scope.$eval( expression ) ) {
					element.hide();
				}


				// I watch the expression in $scope context to
				// see when it changes - and adjust the visibility
				// of the element accordingly.
				$scope.$watch(
					expression,
					function( newValue, oldValue ) {

						// Ignore first-run values since we've
						// already defaulted the element state.
						if ( newValue === oldValue ) {
							return;
						}

						// Show element.
						if ( newValue ) {
							element
								.stop( true, true )
								.slideDown( duration );
						// Hide element.
						} else {
							console.log();
							element
								.stop( true, true )
								.slideUp( duration );
						}

					}
				);

			}


			// Return the directive configuration.
			return({
				link: link,
				restrict: "A"
			});

		}
	);


	
	
	

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
})()

