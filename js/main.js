// Create an angular application called "sortApp"
var sortApp = angular.module('sortApp', []);

sortApp.controller('mainController', function($scope, $http){
	$scope.sortType = 'name' //anything that is defined as part of scope we can reference in html
	$http.get('data/salaries.json').then(function(response) {  //gets Json file
		$scope.data = response.data		
		console.log($scope.data)
	})
})


// Define a controller "mainController" for you application, 
// making sure to pass in both the $scope and $http variables

	// Use and $http.get request to get the salary data
	
		// Set $scope.data equal to the data returned in your results
