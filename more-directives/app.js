angular.module("moreDirectivesApp",[])
.controller("moreDirectivesCtrl", moreDirectivesCtrl);

function moreDirectivesCtrl(){

    this.myList = [
        {'age': 10, 'name':'Dravid'},
        {'age': 20, 'name':'Sachin'},
        {'age': 30, 'name':'Dhoni'},
        {'age': 40, 'name':'Yuvraj'},

    ]

}