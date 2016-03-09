angular.module('angularApp')

.controller('redditController', ['$http','redditService', function($http, redditService){
		var vm= this;
		redditService.then(function success(response){
			vm.posts = response.data.data.children;
		});

}]);

app.directive('reddit', function(){
	return {
		restrict: 'E',
		replace: true,
		template: "<h3>{{post.data.title}}</h3>"
	};
});