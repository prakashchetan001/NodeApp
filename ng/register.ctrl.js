angular.module("app")
.controller('RegisterCtrl',function($scope,UserSvc,$location){
	$scope.register = function(userName,password){
		UserSvc.register(userName,password).
		then(function(response){
			if(response && response.status==201){
				//TODO: Navigate to login page
				$location.path("/login");
			}
			else if(response && response.data && response.data.userExists){
				$scope.errMsg = "User with the username already exists";
			}
		});
	}
});