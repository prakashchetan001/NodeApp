angular.module('app')
.controller('PostsCtrl', function ($scope, PostsSvc,$location) {
	if(!localStorage.getItem("userToken")){
		$location.path("/login");
		return;
	}
	if(localStorage.getItem("username")){
		$scope.$emit('login',localStorage.getItem("username"));
	}
	$scope.addPost = function () {
		if ($scope.postBody) {
			PostsSvc.create({
				username: 'dickeyxxx',
				body: $scope.postBody
			}).success(function (post) {
				$scope.posts.unshift(post)
				$scope.postBody = null
			});
		}	
	}

	PostsSvc.fetch().success(function (posts) {
		$scope.posts = posts
	});
})