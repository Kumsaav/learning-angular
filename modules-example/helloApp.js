var module = angular.module("helloApp",[]);

module.controller("helloCtrl", helloCtrl);

function helloCtrl(){
    this.helloMessage = "Hello I am from the Hello App"
}