app = angular.module('angularApp')
.controller('palindromeController', ['$scope', 'palindromeService', function($scope, palindromeService){

	$scope.palindrome = function() {
		var word = $scope.word
		var lower = word.toLowerCase();
		var reverse = lower.split("").reverse().join("");
		if (lower === reverse) {
			return word + " is a palindrome.";
		} else {
			return word + " is not a palindrome.";
		}
	}

}]);



// function palindrome(word) {
// 	var lower = word.toLowerCase();
// 	var reverse = lower.split("").reverse().join("");
// 	if (lower === reverse) {
// 	} else {
// 		return word + " is not a palindrome.";
// 	}
// }