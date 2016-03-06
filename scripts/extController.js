angular.module('angularApp')
.controller('linkedinController', ['$scope','linkedinService'],function($scope, linkedinService){

	$scope.links = [{
		name: 'Kwaku Osei-Bonsu',
		Url:'https://www.linkedin.com/in/kwakuoseibonsu'
	},
	{
		name: 'Amanda Van Huis',
		Url:'https://www.linkedin.com/in/amandavanhuis'
	},
	{
		name: 'Michael Sandula',
		Url:'https://www.linkedin.com/in/mikesandula'
	}];
)};

// Still needs:

// JSON file
// Service?