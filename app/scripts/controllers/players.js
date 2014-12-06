'use strict';

/**
 * @ngdoc function
 * @name londongdpaymentsystemApp.controller:PlayersCtrl
 * @description
 * # PlayersCtrl
 * Controller of the londongdpaymentsystemApp
 */
 
	  

angular.module('londongdpaymentsystemApp')
  .controller('PlayersCtrl', function ($scope,teamsService, $http, $rootScope, $upload, SweetAlert,playersService) {
	  
	
      $scope.user = {};
      
      $scope.getPlayerList = function()
      {  		  
		var promise = playersService.getAllPlayers();
		   promise.then(
          function(resp) { 
       
              $scope.playerList = resp;
          },
          function(errordata) {
              console.log('Error', errordata);
          });
		
      };
	  $scope.getPlayerList();
	  
	  
	  $scope.getMembershipList = function()
      {  		  
		var promise = playersService.getMembershipList();
		   promise.then(
          function(resp) { 
              $scope.memberships = resp;
          },
          function(errordata) {
              console.log('Error', errordata);
          });
		
      };
	  $scope.getMembershipList();
	  
	  
	  $scope.getTeamsList = function()
      {  		  
		var promise = teamsService.getAllTeams();
		   promise.then(
          function(resp) { 
              $scope.teams = resp;
          },
          function(errordata) {
              console.log('Error', errordata);
          });
		
      };
	  $scope.getTeamsList();
	  
	  

	  $scope.userimage = '';
	 
	  $scope.signupForm = function()
	  {
		  $http({
			    method: 'POST',
			    url: $rootScope.siteUrl+'/index.php?option=com_gdpayments&task=register_user&tmpl=component&format=raw',
			    data: $scope.user,
			    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			    transformRequest: function(obj) {
			        var str = [];
			        for(var p in obj){
				    	str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));    
			        }			        
			        return str.join('&');
			    },
			    
		   }).success(function(data) {
		     if(data==='exists'){
			     sweetAlert('Oops...', 'This member must be registered already, please check the list or use another email', 'error');
			     
		     }else{
			     $scope.user = {};
			     sweetAlert('OK', 'This player has been registered, you can select it on the list', 'success');
			     $scope.getPlayerList();
		     }
		  });
	  };
	  
	  
	   $scope.onFileSelect = function($files) {
	
	   	for (var i = 0; i < $files.length; i++) {
	      var file = $files[i];
	      $scope.upload = $upload.upload({
	        url: $rootScope.siteUrl+'/index.php?option=com_gdpayments&task=upload_member_image&tmpl=component&format=raw',
	        method: 'POST',
	        //headers: {'header-key': 'header-value'},
	        //withCredentials: true,
	        data: {photo: file},
	        file: file, // or list of files ($files) for html5 only
	        //fileName: 'doc.jpg' or ['1.jpg', '2.jpg', ...] // to modify the name of the file(s)
	        // customize file formData name ('Content-Disposition'), server side file variable name. 
	        //fileFormDataName: myFile, //or a list of names for multiple files (html5). Default is 'file' 
	        // customize how data is added to formData. See #40#issuecomment-28612000 for sample code
	        //formDataAppender: function(formData, key, val){}
	      }).progress(function(evt) {
	      	$scope.percentage = parseInt(100.0 * evt.loaded / evt.total);
	        console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
	      }).success(function(data) {
	        // file is uploaded successfully
	        console.log(data);
	        
	        if(data!==0){
		        $scope.user.image = data;
	        }
	      });
	      //.error(...)
	      //.then(success, error, progress); 
	      // access or attach event listeners to the underlying XMLHttpRequest.
	      //.xhr(function(xhr){xhr.upload.addEventListener(...)})
	    }
	   	
	   	
	   };
	  
	
	  
	  
    
  });
