function validation() {
    let firstString = document.getElementById("stringName").value;
    let secondString = document.getElementById("findWords").value;
    let count = 0;
    for (let i = 0; i < firstString.length; i++) {
        if (firstString[i].toLowerCase() === secondString.toLowerCase()) {
            count++;
        }
    }
    if (count == 0) {
        document.getElementById("errorMessage").textContent = "the word you try to find isn't in the string";
    }
    else if (count == 1) {
        document.getElementById("found").textContent = "There is " + count + " " + secondString + " in the string.";
    }
    else {
        document.getElementById("found").textContent = "There are " + count + " " + secondString + " in the string.";
    }
}

function checkInputs() {
    let firstString = document.getElementById("stringName").value;
    let secondString = document.getElementById("findWords").value;
    const submitButton = document.getElementById("submit");
    // Enable or disable the button based on input values
    submitButton.disabled = firstString === "" || secondString === "";
}

function init() {
    //This is for validation if to see if the 
    document.getElementById("stringName").addEventListener('input', checkInputs);
    document.getElementById("findWords").addEventListener('input', checkInputs);
    // document.getElementById("submit").disabled = false;
    document.getElementById("submit").addEventListener('click', validation);
}
document.addEventListener("DOMContentLoaded", init);