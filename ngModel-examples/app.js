var module = angular.module("moduleExamples",[]);
module.controller("ExampleCtrl", ExampleCtrl);

function ExampleCtrl($scope){

    $scope.textBoxChanged = function(){
        console.log("Input changed");
    }

}