let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext('2d');

let height = canvas.height;
let width = canvas.width;
const SIDE = 25;
const DISTANCE = Math.sqrt(Math.pow(SIDE, 2) + Math.pow(SIDE, 2));
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let numRows = document.getElementById("rows").value;
    let numColumns = document.getElementById("columns").value;
    const errorMessage = document.getElementById("errorMessage");

    errorMessage.textContent = "";

    numRows = parseInt(numRows);
    numColumns = parseInt(numColumns);

    if (numRows === 0 && numColumns === 0) {
        errorMessage.textContent = "There is nothing to display.";
        return;
    }

    if ((isNaN(numRows) || numRows <= 0 || numRows > 100) || (isNaN(numColumns) || numColumns <= 0 || numColumns > 100)) {
        errorMessage.textContent = "Please enter a valid number of rows and columns between 1 and 100.";
        return;
    }
    else {
        const requiredWidth = numColumns * DISTANCE * 1.5;
        const requiredHeight = numRows * DISTANCE * 1.5;

        // Update canvas dimensions
        canvas.width = requiredWidth;
        canvas.height = requiredHeight;

        let movex, movey;
        for (let i = 0; i < numColumns; i++) {
            movey = SIDE + i * DISTANCE * 1.4 ;
            for (let j = 0; j < numRows; j++) {
                movex = SIDE + j * DISTANCE * 1.4;
                ctx.beginPath();
                ctx.fillStyle = "green";
                ctx.moveTo(movex, movey - SIDE);
                ctx.lineTo(movex + SIDE, movey);
                ctx.lineTo(movex, movey + SIDE);
                ctx.lineTo(movex - SIDE, movey);
                ctx.closePath();
                ctx.stroke();
                ctx.fill();

            }
        }
    }

    errorMessage.textContent = "";
}

function init() {
    send = document.getElementById("submision");
    send.addEventListener("click", draw, false);

}
document.addEventListener("DOMContentLoaded", init);