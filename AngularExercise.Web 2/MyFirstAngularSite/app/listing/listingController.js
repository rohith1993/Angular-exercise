angular.module("listing").controller("listingController", function ($scope,$http) {
	function init() {

		// get data from account view api for now from running locally

		//$http.get("http://localhost:43858/api/ListingHistory?accountid=1").
		//	success(function (response) {
		//		$scope.listings = response;
		//	})
		//	.error(function (error) {
		//		$scope.errorMessage = error;
		//	});

		//Example Data of Listings if fail from web api
		$scope.listings = [
			{
				id: 1,
				description: "October Business Development trip 2015",
				image: "image data in bytes",
				priceBuy: 200,
				category: 1,
				accountId:1,
				startDate: new Date("2015-10-10")
			},
			{
				id: 2,
				description: "October Business Development trip 2015",
				image: "image data in bytes",
				priceBuy: 200,
				category: 1,
				accountId: 1,
				startDate: new Date("2015-10-10")
			}
		]; 
	}
	init();

	//By Default do not hide the data 
	$scope.isHidden = false;

	//Hide Button Functionailty
	$scope.hide = function () {
		$scope.isHidden = true;
	};

	//UnHide Button Functionailty
	$scope.viewListingHistory = function () {
		$scope.isHidden = false;
	}

});
