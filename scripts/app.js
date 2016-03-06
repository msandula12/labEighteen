angular.module('angularApp', ['ngRoute'])
.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/palindrome.html',
		controller: 'palindromeController'
	})
	.when('/view2', {
		templateUrl: 'partials/linkedin.html',
		controller: 'linkedinController'
	})
	.otherwise({redirectTo: '/'});
});

/*

		Your app must include:
TO DO	1. Multiple routes (at least two)
DONE		• One of your routes should be one of the following:
DONE			— ngPalimdrome, ngFizzBuzz, ngPrimes
DONE		• The route should include a single large text input field
DONE		• The user enters something into the field and some result is posted on the page
DONE		• Make a service to handle the logic to handle the input
DONE		• Sample output: 
				— ngFizzBuzz: "The number 15 is Fizzy and Buzzy" 
				— ngPalindrome: "Elephant is not a palindrome"
				— ngPrimes: "The prime factors of 9 are 3, 3"
TO DO	2. Each view should have its own controller
TO DO	3. At least two services:
DONE		• One that works internally for your app
TO DO		• One that pulls data from an external source
				— e.g., Instagram, Reddit, Flickr
TO DO	4. At least two custom directives
TO DO	5. Inject at least one external dependency (other than ngRoute)
TO DO	6. Make use of ng-repeat

*/