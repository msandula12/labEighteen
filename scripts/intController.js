app = angular.module('angularApp')
.controller('palindromeController', ['$scope', 'palindromeService', function($scope, palindromeService){

	$scope.palindrome = function() {
		var word = $scope.word
		var lower = word.toLowerCase().replace(/\s+/g, '');
		var reverse = lower.split("").reverse().join("");
		if (lower.length > 2) {
			if (lower === reverse) {
				return word + " is a palindrome.";
			} else {
				return word + " is not a palindrome.";
			}
		}
	}

}]);