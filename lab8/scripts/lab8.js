let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

const ADVANCE = 20;
let moveHorizontal = 0;
const WIDTH = canvas.width;
const HEIGHT = canvas.height;
const GROUND_HEIGHT = 100;
const GROUND_LINE = HEIGHT - GROUND_HEIGHT;
const RADIUS = 50;
let dPace = 600;  //delay
let step = 150;   //incr/decrement for delay
let timer;

function drawBackground() {
    ctx.fillStyle = 'rgb(100,100,255)'; //Full background
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    ctx.fillStyle = 'rgb(210,210,25)';
    ctx.fillRect(0, GROUND_LINE, WIDTH, 100); // Road/floor

    ctx.fillStyle = 'orange';
    ctx.beginPath();
    ctx.arc(800, 0, 75, 0, 2 * Math.PI); // The sun
    ctx.fill();

    ctx.font = '40px Arial'; //Message
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'rbg(25,25,25)';
    ctx.fillText("Sunny day", 20, 50);
    ctx.strokeText("Sunny day", 20, 50);
}

function drawBall() {
    ctx.fillStyle = "crimson";
    ctx.beginPath();
    ctx.arc(RADIUS, GROUND_LINE - RADIUS, RADIUS, 0, 2 * Math.PI); // ball
    ctx.fill();
}

function advance() {
    ctx.save();
    drawBackground();

    moveHorizontal += ADVANCE;
    console.log(moveHorizontal);  //to erase
    if (moveHorizontal > WIDTH) {
        moveHorizontal = -RADIUS * 2;
    }
    if (moveHorizontal <= WIDTH) {
        ctx.translate(moveHorizontal, 0);
    }
    else {
        ctx.translate(moveHorizontal, 0);
    }
    drawBall();
    ctx.restore();
}

function rollIt(speed) {
    document.getElementById("moveIt").disabled = true;
    timer = setInterval(advance, speed);
    document.getElementById("faster").disabled = false;
    document.getElementById("slower").disabled = false;
    document.getElementById("speedStatus").innerHTML = dPace;
}

function speedUP() {
    clearInterval(timer);
    if (dPace > 0) {
        dPace -= step;
    }
    else {
        dPace = 0;
    }
    rollIt(dPace);
}

//Slow Down function goes here

function slowDown() {
    clearInterval(timer);
    dPace += step;
    rollIt(dPace);
}

function init() {
    drawBackground()
    drawBall();

    const rollButton = document.getElementById("moveIt");
    rollButton.addEventListener("click", function () { rollIt(dPace); });
    const fastButton = document.getElementById("faster");
    fastButton.addEventListener("click", speedUP);
    const slowButton = document.getElementById("slower");
    slowButton.addEventListener("click", slowDown);

}

document.addEventListener('DOMContentLoaded', init);