function resetDisplay() {
    document.getElementById("displayHere").innerHTML = "";
}

function printGreeting() {
    let name = prompt("Enter your name: ");
    document.getElementById("displayHere").innerHTML = "Hello " + name + " have a nice day!";
}

function temperature() {
    let number = prompt("Enter a Fahrenheit you want to covert: ");
    let c = (Number(number) - 32) * 5 / 9;
    document.getElementById("displayHere").innerHTML = Number(number) + " in Fahrenheit is equivalent to " + c + " in Celsius";
}
function random2Numbers(n) {
    let x = 1 + Math.floor(Math.random() * n);
    let y = 1 + Math.floor(Math.random() * n);
    document.getElementById("displayHere").innerHTML = "The two generated values are " + x + " and " + y;
}

function callRanNumb() {
    random2Numbers(80);
}

// Ensure the script runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("greet").addEventListener("click", printGreeting);
    document.getElementById("convert").addEventListener("click", temperature);
    document.getElementById("random").addEventListener("click", callRanNumb);
    document.getElementById("reset").addEventListener("click", resetDisplay);
});
