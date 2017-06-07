angular.module("todoApp",[])
.controller("todoCtrl", todoCtrl);

function todoCtrl(){
    this.editMode = false;
    this.todoList = [
        "Learn Angular JS",
        "Learn Node JS",
        "Learn React JS"
    ];

    this.addNewTodo = function(){
        this.todoList.push(this.todoInput);
        this.todoInput="";
    };

    this.removeTodo = function(index){
        this.todoList.splice(index,1);
    };

    this.toggleEditMode = function(){
        this.editMode = !this.editMode;
    }

    this.saveTodoAndToggleEditMode = function(){
        this.editMode = !this.editMode;
    }
}