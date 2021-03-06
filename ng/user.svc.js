angular.module('app')
.service('UserSvc', function ($http) {
  var svc = this;
  svc.getUser = function () {
    return $http.get('/api/users');
  }
  svc.login = function (username, password) {
	return $http.post('/api/sessions', {
      username: username, password: password
    }).then(function (val) {
		svc.token = val.data;
		localStorage.setItem("userToken",svc.token);
	    $http.defaults.headers.common['X-Auth'] = val.data;
		return svc.getUser();
    },function(response){
		return response;
	});
  }
  svc.register = function(username,password){
	  if(username && password){
		  return $http.post('/api/users',{
			  username:username,
			  password:password
			  
		  }).then(function(response){
			  return response;
		  });
	  }
	  else{
		return null;  
	  } 
  }
});