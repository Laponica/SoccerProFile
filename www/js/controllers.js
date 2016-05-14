angular.module('app.controllers', [])

.controller('loginCtrl', function($scope) {

})

.controller('attitudeCtrl', function($scope) {

})

.controller('abilityCtrl', function($scope) {

})

.controller('homeCtrl', function($scope) {

})

.controller('playerMenuCtrl', function($scope) {

})

.controller('pageCtrl', function($scope) {

})

.controller('team1Ctrl', function($scope) {

})

.controller('viewStatsCtrl', function($scope) {

})

  .controller('attendanceCtrl', function($scope, $ionicPopover) {

    $ionicPopover.fromTemplateUrl('templates/attendancePopover.html', {
      scope: $scope
    }).then(function(popover) {
      $scope.popover = popover;
    });

    $scope.openPopover = function($event) {
      $scope.popover.show($event);
    };

    $scope.closePopover = function() {
      $scope.popover.hide();
    };

    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.popover.remove();
    });

    // Execute action on hide popover
    $scope.$on('popover.hidden', function() {
      // Execute action
    });

    // Execute action on remove popover
    $scope.$on('popover.removed', function() {
      // Execute action
    });
  })

  .controller('attitudeCtrl', function($scope, $ionicPopover) {

    $ionicPopover.fromTemplateUrl('templates/attitudePopover.html', {
      scope: $scope
    }).then(function(popover) {
      $scope.popover = popover;
    });

    $scope.openPopover = function($event) {
      $scope.popover.show($event);
    };

    $scope.closePopover = function() {
      $scope.popover.hide();
    };

    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.popover.remove();
    });

    // Execute action on hide popover
    $scope.$on('popover.hidden', function() {
      // Execute action
    });

    // Execute action on remove popover
    $scope.$on('popover.removed', function() {
      // Execute action
    });
  })

  .controller('abilityCtrl', function($scope, $ionicPopover) {

    $ionicPopover.fromTemplateUrl('templates/abilityPopover.html', {
      scope: $scope
    }).then(function(popover) {
      $scope.popover = popover;
    });

    $scope.openPopover = function($event) {
      $scope.popover.show($event);
    };

    $scope.closePopover = function() {
      $scope.popover.hide();
    };

    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.popover.remove();
    });

    // Execute action on hide popover
    $scope.$on('popover.hidden', function() {
      // Execute action
    });

    // Execute action on remove popover
    $scope.$on('popover.removed', function() {
      // Execute action
    });
  })
  
  .controller('getcoachteams', function($scope){
	  
	// Upon controller startup, load in the custom club attributes
	var init = function(){
		
		// $_GET   ........
		
		$.ajax({
			type: "GET",
			url:"http://catchthedragon.ca/getcoachteamslazyedition.php", 
			datatype: "jsonp",
			data: "{CoachID:" + "5" + "}", // Replace '5' with $scope.coachID or whatever we call the logged in coach ID
			jsonp: false,
			crossDomain: true,
			cache: false,
			success: function(response){		
				// alert(response);
				
				$scope.teamArray = JSON.parse(response);
			},
			error: function(){
				alert("Get Teams failed. The request to the server could not be completed. Try again later.");
			}
		});
	};
	
	init();
  })
  
  .controller('retrievePlayersCtrl', function($scope) {
	  
	// Upon controller startup, load in the custom club attributes
	var init = function(){
		
		$.ajax({
			type: "GET",
			url:"http://catchthedragon.ca/getplayers.php", 
			datatype: "jsonp",
			jsonp: false,
			crossDomain: true,
			cache: false,
			success: function(response){		
				// alert(response);
				
				$scope.playerArray = JSON.parse(response);
			},
			error: function(){
				alert("Get Players failed. The request to the server could not be completed. Try again later.");
			}
		});
		
		$.ajax({
			type: "GET",
			url:"http://catchthedragon.ca/getattributes.php", 
			datatype: "jsonp",
			jsonp: false,
			crossDomain: true,
			cache: false,
			success: function(response){		
				// alert(response);
				
				$scope.attributeArray = JSON.parse(response);
			},
			error: function(){
				alert("Get Attributes failed. The request to the server could not be completed. Try again later.");
			}
		});
	};
	
	init();
  })
