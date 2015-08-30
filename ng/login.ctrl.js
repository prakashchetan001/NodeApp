angular.module("app")
.controller('LoginCtrl',function($scope,UserSvc,$location){
	$scope.login = function(userName,password){
		UserSvc.login(userName,password).
		then(function(response){
			if(!response || response.status==401){
				$scope.errMsg = "Invalid username/password";
				return;
			}
			$scope.$emit('login',response.data.username);
			localStorage.setItem("username",response.data.username);
			$location.path("/");
		},function(response){
			console.log("In err callback",response);
		});
	}
});