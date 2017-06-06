var module = angular.module("clockApp", []);
module.controller("clockCtrl", clockCtrl);

function clockCtrl($scope) {
    var time = new Date();
    $scope.currentTime = time.toTimeString();
    $scope.updateTime = function () {
        var time = new Date();
        $scope.currentTime = time.toTimeString();
        $scope.userName = "Hii";
    }

}
