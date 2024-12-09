function inputValidation() {
    const firstNum = document.getElementById("firstInput").value;
    const secondNum = document.getElementById("secondInput").value;
    let errorMessage = "";

    if (firstNum === "") {
        errorMessage += "Value 1 is empty\n";
    } else if (isNaN(firstNum)) {
        errorMessage += "Value 1 is not a number\n";
    }
    if (secondNum === "") {
        errorMessage += "Value 2 is empty\n";
    } else if (isNaN(secondNum)) {
        errorMessage += "Value 2 is not a number\n";
    }
    if (errorMessage !== "") {
        document.getElementById("errorMessage").innerText = errorMessage;
        return false;
    } else {
        document.getElementById("errorMessage").innerText = "";
        return true;
    }
}
function add() {
    if (inputValidation()) {
        const firstNum = parseFloat(document.getElementById("firstInput").value);
        const secondNum = parseFloat(document.getElementById("secondInput").value);
        total = firstNum + secondNum;
        document.getElementById("result").value = total;
    }
}
function substract() {
    if (inputValidation()) {
        const firstNum = parseFloat(document.getElementById("firstInput").value);
        const secondNum = parseFloat(document.getElementById("secondInput").value);
        total = firstNum - secondNum;
        document.getElementById("result").value = total;
    }
}
function multiply() {
    if (inputValidation()) {
        const firstNum = parseFloat(document.getElementById("firstInput").value);
        const secondNum = parseFloat(document.getElementById("secondInput").value);
        total = firstNum * secondNum;
        document.getElementById("result").value = total;
    }
}
function divide() {
    if (inputValidation()) {
        const firstNum = parseFloat(document.getElementById("firstInput").value);
        const secondNum = parseFloat(document.getElementById("secondInput").value);
        if (secondNum !== 0) {
            total = firstNum / secondNum;
            document.getElementById("result").value = total;
        }
        else {
            document.getElementById("errorMessage").innerHTML = "Cannot divide number zero";
        }
    }
}
function remainder() {
    if (inputValidation()) {
        const firstNum = parseFloat(document.getElementById("firstInput").value);
        const secondNum = parseFloat(document.getElementById("secondInput").value);
        total = firstNum % secondNum;
        document.getElementById("result").value = total;
    }
}
function reset() {
    document.getElementById("firstInput").value = "";
    document.getElementById("secondInput").value = "";
    document.getElementById("result").value = "";
    document.getElementById("errorMessage").innerHTML = "";
}
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("add").addEventListener("click", add);
    document.getElementById("substract").addEventListener("click", substract);
    document.getElementById("divide").addEventListener("click", divide);
    document.getElementById("multiply").addEventListener("click", multiply);
    document.getElementById("remainder").addEventListener("click", remainder);
    document.getElementById("reset").addEventListener("click", reset);
});

//Global variable which to get the result from all the function
let total;