angular.module('app')
.controller('ApplicationCtrl', function ($scope,$location) {
  if(!localStorage.getItem("userToken")){
	$location.path("/login");
  }
  $scope.$on('login',function(_,user){
	  $scope.currentUser=user;
  });
  $scope.$on('logout',function(_,user){
	  $scope.currentUser="";
  });
})