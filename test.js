var myTest = angular.module('myTest',[]);

myTest.controller('testCtrl', function($scope, $filter, $http, $sce) {


var lefts = [-1680, -1120, -560, -1680, -1120, -560, 0, 640, 1280, 0, 640, 1280];
var tops = [0, 0, 0, 558, 558, 558, 0, 0, 0, 520, 520, 520];
var heights = [459, 459, 459, 459, 459, 459, 454, 454, 454, 454, 454, 454];
var widths = [544, 544, 544, 544, 544, 544, 624, 624, 624, 624, 624, 624];

var links = function(num){
	//return $($(".room_list_room")[num]).find("a")[0].href;
	return "www.google.com";
};

var myOpen = function(idx, num){
	var win = window.open(links(num||idx), "win"+idx, "height="+heights[idx]+", width="+widths[idx]+", left="+lefts[idx]+", top="+tops[idx]);
	window.focus();
	return win;
};

$scope.toto = function(init, len, startAt){
	var num = startAt || 0;
	var wins = [];
	for (var i = init; i < len; i++) {
		wins.push(myOpen(i, num));
		num++;
	}
	return wins;
};

$scope.urlTmp = "http://www.google.com";
$scope.url = "http://www.google.com";

$scope.open = function(){
    $scope.url = $sce.trustAsResourceUrl($scope.urlTmp);
};

});