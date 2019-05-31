var app = angular.module("homepage", ["ngRoute"]);
app.config(function($routeProvider) {
	$routeProvider
	.when("/", {
		templateUrl: "main.htm"
	})
	.when("/info", {
		templateUrl: "info.htm"
	})
	.when("/progress", {
		templateUrl: "progress.htm"
	})
	.when("/documentation", {
		templateUrl: "documentation.htm"
	})
	.when("/result", {
		templateUrl: "result.htm"
	})
	.when("/references", {
		templateUrl: "references.htm"
	})
	.when("/contacts", {
		templateUrl: "contact.htm"
	});
});