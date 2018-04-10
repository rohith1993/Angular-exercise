angular.module("listing").controller("biddingController", function ($scope,$http) {
	function init() {
		// get data from account view api for now from running locally

		//$http.get("http://localhost:43858/api/BidHistory?accountid=1").
		//	success(function (response) {
		//		$scope.biddings = response;
		//	})
		//	.error(function (error) {
		//		$scope.errorMessage = error;
		//	});

		//Example Data of Bid Listings if fail from web api
		$scope.biddings = [
			{
				id: 1,
				bidid: 1,
				itemid: 2,
				accountId: 1				
			},
			{
				id: 2,
				bidid: 1,
				itemid: 3,
				accountId: 1
			}
		]; 
	}

	//initialize the data assuming the account Id is passed in from url
	init();

	$scope.isHidden = false;
	$scope.hide = function () {
		$scope.isHidden = true;
	};
	$scope.viewBiddingHistory = function () {
		$scope.isHidden = false;
	}

});
