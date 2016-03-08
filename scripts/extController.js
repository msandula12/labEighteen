angular.module('angularApp')

.controller('redditController', ['$http','redditService', function($http, redditService){
		var vm= this;
		redditService.then(function success(response){
			vm.posts = response.data.data.children;
		});

}]);

// Still needs:

// JSON file
// Service?