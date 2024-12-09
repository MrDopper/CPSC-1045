//Global variables for drawing
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

//Default constructor
function drawDefaultCircle() {
    //Left side
    ctx.beginPath();
    ctx.arc(initialx, 15, 15, Math.PI / 2, -Math.PI / 2, false);
    ctx.stroke();
    ctx.fill();

    //Right side
    ctx.beginPath();
    ctx.arc(initialx, 15, 15, Math.PI / 2, Math.PI * 1.5, true);
    ctx.stroke();
    ctx.fill();

}

//Draw funtions for two colours
function drawColoredCircles(colour1, colour2) {
    ctx.beginPath();
    ctx.fillStyle = colour1;
    ctx.arc(initialx, 15, 15, Math.PI / 2, -Math.PI / 2, false);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = colour2;
    ctx.arc(initialx, 15, 15, Math.PI / 2, Math.PI * 1.5, true);
    ctx.stroke();
    ctx.fill();
}

//This will active when you click
function validate() {
    //Clear the current canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //Reset the cirle movement
    moveToRight = 0;
    //Initial value for x
    initialx = 15;
    //Clear all the message at the end.
    document.getElementById("errorMessage").textContent = "";
    //Get all the values
    let numCircles = document.getElementById("number").value;
    let colour1 = document.getElementById("color1").value;
    let colour2 = document.getElementById("color2").value;
    //Check if it the case that you need to draw a colour circles or not
    if (numCircles !== "" && colour1 !== "" && colour2 !== "") {
        let num = parseInt(numCircles);
        //Check if the number is reach to the maximum number or not
        if (num <= 10) {
            //Start from index 1 to whatever given numbers
            for (let i = 1; i <= num; i++) {
                //Save the current x,y
                ctx.save();
                //given the coordinate value
                ctx.translate(moveToRight, 0);
                //Call a drawing function
                drawColoredCircles(colour1, colour2);
                //Move the cooridinate index of x to 30.
                moveToRight += 30;
                //Restore the coordinate value to (0,0)
                ctx.restore();
            }
        }
        //Throw an error messages
        else {
            document.getElementById("errorMessage").textContent = "Error: The number of circle is greater than 9";
        }
    }
    //Default
    else if (numCircles === "") {
        document.getElementById("errorMessage").textContent = "Error: Invalid number of circles";
    } else {
        let num = parseInt(numCircles);
        if (num <= 10) {
            for (let i = 1; i <= num; i++) {
                ctx.save();
                ctx.translate(moveToRight, 0);
                drawDefaultCircle();
                moveToRight += 30;
                ctx.restore();
            }
        }
        else {
            document.getElementById("errorMessage").textContent = "Error: The number of circle is greater than 9";
        }
    }
}

function init() {
    document.getElementById("drawCircles").addEventListener("click", validate, false);
}

document.addEventListener('DOMContentLoaded', init);
