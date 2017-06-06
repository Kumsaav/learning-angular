var module = angular.module("calculatorApp", []);
module.controller("calcCtrl", calcCtrl);

function calcCtrl() {
    this.selectOperation = function (button) {
        this.operation = button;
        //   this.result = this.firstNum + this.secondNum;
    }

    this.performOperation = function () {
        switch (this.operation) {
            case '+': this.result = parseFloat(this.firstNum) + parseFloat(this.secondNum);
                break;
            case '-': this.result = parseFloat(this.firstNum) - parseFloat(this.secondNum);
                break;
            case '*': this.result = parseFloat(this.firstNum) * parseFloat(this.secondNum);
                break;
            case '/': this.result = parseFloat(this.firstNum) / parseFloat(this.secondNum);
                break;
        }

    }
}