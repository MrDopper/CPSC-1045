function convertKmToMiles() {
    //Declare a constant variable for miles
    const MILES = 0.62137119;
    let covert = prompt("Please provide any kilometer that you want to covert into miiles: ");
    let number = Number(covert) * MILES;
    document.getElementById("divDistance").innerHTML = Number(covert) + " km(s) is equivalent to " + number + " miles";
}

function calculateTAX() {
    const BC = 0.12;
    const AB = 0.05;
    let value = prompt("Please enter the amount of money you used to purchase items: ");
    let taxBC = Number(value) * BC;
    let taxAB = Number(value) * AB;
    document.getElementById("divTAX").innerHTML = "The value of your purchase was: $"
        + Number(value) + "<br>The amount of tax to pay in BC would be: $" + taxBC +
        "<br>The amount of tax to pay in BC would be: $" + taxAB;
}

function calculateTotal(tax) {
    let firstItem = prompt("Enter the price of your first item: ");
    let secondItem = prompt("Enter the price of your second item: ");
    let thirdItem = prompt("Enter the price of your third item: ");
    let total = Number(firstItem) + Number(secondItem) + Number(thirdItem);
    let totalTax = total * tax / 100;
    let sum = total + totalTax;
    document.getElementById("divTotal").innerHTML = "Price of the first item: $" + firstItem
        + "<br>Price of the second item: $" + secondItem + "<br>Price of the third item: $" + thirdItem
        + "<br>Total before tax: $" + total + "<br>Tax: $" + totalTax + "<br>Total + Tax: $" + sum;
}
function cleanUp() {
    document.getElementById("divDistance").innerHTML = "km to miles result displayed here";
    document.getElementById("divTAX").innerHTML = "You will show the result of calculating the TAX here";
    document.getElementById("divTotal").innerHTML = "You will show the total of a multi-item purchase here";
}