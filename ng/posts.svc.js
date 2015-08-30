angular.module('app')
.service('PostsSvc', function ($http) {
  $http.defaults.headers.common['X-Auth'] = localStorage.getItem("userToken");
  this.fetch = function () {
    return $http.get('/api/posts')
  }
  this.create = function (post) {
    return $http.post('/api/posts', post)
  }
})