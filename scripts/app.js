var app = angular.module("angularApp", ['ngRoute']);
app.config(function($routeprovider) {
	$routeprovider
	.when('/', {
		templateUrl: '',
		controller: ''
	})
	.otherwise({redirectTo: '/'});
});

/*

Your app must include:
1. Multiple routes (at least two)
	• One of your routes should be one of the following:
		— ngPalimdrome, ngFizzBuzz, ngPrimes
	• The route should include a single large text input field
	• The user enters something into the field and some result is posted on the page
	• Make a service to handle the logic to handle the input
	• Sample output: 
		— ngFizzBuzz: "The number 15 is Fizzy and Buzzy" 
		— ngPalindrome: "Elephant is not a palindrome"
		— ngPrimes: "The prime factors of 9 are 3, 3"
2. Each view should have its own controller
3. At least two services:
	• One that works internally for your app
	• One that pulls data from an external source
		— e.g., Instagram, Reddit, Flickr
4. At least two custom directives
5. Inject at least one external dependency (other than ngRoute)
6. Make use of ng-repeat

*/