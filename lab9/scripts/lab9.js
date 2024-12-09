let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

const RADIUS = 50;
let colour = ["red", "blue", "green", "pink", "purple", "yellow", "orange"];
colorIndex = 0;

function drawBackground() {
    let img = new Image();
    img.src = "images/sky.jpg";
    img.onload = function () {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
}

function drawCircle(x, y, colour) {
    ctx.beginPath();
    ctx.arc(x, y, RADIUS, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = colour;
    ctx.fill();
}

function clicky(event) {
    let x = event.offsetX, y = event.offsetY;
    drawCircle(x, y, colour[colorIndex]);
    colorIndex = (colorIndex + 1) % colour.length;
}

function resetCanv() {
    drawBackground()
    //restart the colours
    colorIndex = 0;
}

function init() {
    drawBackground()
    canvas.addEventListener("click", clicky);
    const resetButton = document.getElementById("Reset");
    resetButton.addEventListener("click", resetCanv);
}

document.addEventListener('DOMContentLoaded', init);