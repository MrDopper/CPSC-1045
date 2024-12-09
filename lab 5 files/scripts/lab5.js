function checkEmail() {
    let value = document.getElementById("email").value;
    if (!value.includes(".") || !value.includes("@")) {
        document.getElementById('errorDisplay').textContent = "Invalid e-mail";
        return false;
    }
    else {
        document.getElementById("errorDisplay").textContent = "";
        return true;
    }
}

function validateFields() {
    let name = document.getElementById("name").value;
    if (checkEmail() && name.trim() !== "") {
        //We need to fill this block
        document.getElementById("send").disabled = false;
    }
    else {
        document.getElementById("errorDisplay").textContent = "You haven't enter your user mame";
        document.getElementById("send").disabled = true;
    }
}

function init() {
    const emailBox = document.getElementById("email");
    emailBox.addEventListener("keyup", checkEmail, false);

    const validateButton = document.getElementById("validate");
    validateButton.addEventListener("click", validateFields, false);
}

document.addEventListener('DOMContentLoaded', init);