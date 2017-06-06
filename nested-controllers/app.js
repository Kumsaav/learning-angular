var module = angular.module("nestedControllersApp",[]);
module.controller("Ctrl1", Ctrl1);
module.controller("Ctrl2", Ctrl2);

/*function Ctrl1($scope){
    $scope.testprop = "From Ctrl 1";
}

function Ctrl2($scope){
    $scope.testprop = "From Ctrl 2";
}*/

function Ctrl1(){
    // var this = $scope;
    this.testprop = "From Ctrl 1";
}

function Ctrl2(){
    this.testprop = "From Ctrl 2";
}