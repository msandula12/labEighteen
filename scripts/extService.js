angular.module('angularApp')
.factory('redditService', ['$http', function($http){

	return $http({
		method: 'GET',
		url: 'https://www.reddit.com/r/aww.json'
	});

}]);