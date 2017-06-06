// Create an app
var module = angular.module("myApp", []);

// Register controller with the app
module.controller("mainCtrl", Main);

function Main($scope){
    
    $scope.timeOfDay = 10;
}