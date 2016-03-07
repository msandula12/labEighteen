app = angular.module('angularApp')
app.controller('palindromeController', ['$scope', 'palindromeService', function($scope, palindromeService){

	$scope.palindrome = function() {
		var word = $scope.word
		var lower = word.toLowerCase();
		var reverse = lower.split("").reverse().join("");
		if (lower === reverse) {
			return word + " is a palindrome.";
		} else if {
			return word + " is not a palindrome.";
		} else {
			return "You haven't typed in a Palindrome!";
		}
	}
}]);

app.directive('placeWord', function(){
	return {
		restrict: 'E',
		replace: true,
		template: '<h3>{{palindrome()}}</h3>'
	};
});



// function palindrome(word) {
// 	var lower = word.toLowerCase();
// 	var reverse = lower.split("").reverse().join("");
// 	if (lower === reverse) {
// 	} else {
// 		return word + " is not a palindrome.";
// 	}
// }