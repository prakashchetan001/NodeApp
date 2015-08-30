angular.module("app")
.controller('LogoutCtrl',function($scope,UserSvc,$location){
	localStorage.clear();
	$scope.$emit('logout');
	$location.path("/login");
});