let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

const ADVANCE = 20;
let moveToRight = ADVANCE;
let lights = false; // lights are OFF by default
const width = 800;
const height = 500;
const MID = width / 2;
const GROUND = 400;
const WHEEL_RADIUS = 18;
const CAR_FRONT = 190 - WHEEL_RADIUS;

function drawBackground() {
    ctx.fillStyle = 'rgb(150,175,255)'; //Full background
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = 'rgb(25,25,25)';
    ctx.fillRect(0, GROUND, width, 100); // Road/floor

    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(800, 0, 75, 0, 2 * Math.PI); // The moon
    ctx.fill();

    ctx.font = '40px Arial'; //Message
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'rbg(25,25,25)';
    ctx.fillText("Drive my car", 20, 50);
    ctx.strokeText("Drive my car", 20, 50);
}

function drawCar() {
    //draw wheels
    ctx.fillStyle = "white";
    ctx.beginPath();
    // back tire
    ctx.arc(60, GROUND - WHEEL_RADIUS, WHEEL_RADIUS, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    // front tire
    ctx.arc(120, GROUND - WHEEL_RADIUS, WHEEL_RADIUS, 0, 2 * Math.PI)
    ctx.fill();

    ctx.fillStyle = "orange";
    ctx.beginPath();
    // back tire cover
    ctx.arc(60, GROUND - WHEEL_RADIUS, WHEEL_RADIUS / 2, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    // front tire cover
    ctx.arc(120, GROUND - WHEEL_RADIUS, WHEEL_RADIUS / 2, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    //end of draw wheels

    //draw car body
    ctx.fillStyle = "orange";
    ctx.beginPath();
    ctx.lineTo(20, GROUND - WHEEL_RADIUS / 2);
    ctx.lineTo(60 - WHEEL_RADIUS, GROUND - WHEEL_RADIUS / 2);
    ctx.arc(60, GROUND - WHEEL_RADIUS, WHEEL_RADIUS + 1, Math.PI, 2 * Math.PI);
    ctx.lineTo(60 + WHEEL_RADIUS, GROUND - WHEEL_RADIUS / 2);
    ctx.lineTo(120 - WHEEL_RADIUS, GROUND - WHEEL_RADIUS / 2);
    ctx.arc(120, GROUND - WHEEL_RADIUS, WHEEL_RADIUS + 1, Math.PI, 2 * Math.PI);
    ctx.lineTo(120 + WHEEL_RADIUS, GROUND - WHEEL_RADIUS / 2);
    ctx.lineTo(CAR_FRONT, GROUND - WHEEL_RADIUS / 2);
    ctx.lineTo(CAR_FRONT, GROUND - WHEEL_RADIUS * 2);
    ctx.lineTo(120 + WHEEL_RADIUS, GROUND - WHEEL_RADIUS * 2);
    ctx.lineTo(120 + WHEEL_RADIUS, GROUND - WHEEL_RADIUS * 4);
    ctx.lineTo(20, GROUND - WHEEL_RADIUS * 4);
    ctx.lineTo(20, GROUND - WHEEL_RADIUS / 2);
    ctx.stroke();
    ctx.fill();
    //end of draw car body
}

function toggleLights() {
    if (lights) {
        //Light are ON turn them off
        lights = false;
        document.getElementById("lightStatus").innerHTML = "Lights OFF";
    }
    else {
        lights = true;
        document.getElementById("lightStatus").innerHTML = "Lights ON";
    }

}

function advance() {
    ctx.save();
    drawBackground();
    ctx.translate(moveToRight, 0);
    drawCar();
    moveToRight += ADVANCE;
    ctx.restore();
}

function init() {
    drawBackground();
    drawCar();
    document.getElementById("lightStatus").innerHTML = "Lights OFF";
    const advanceButton = document.getElementById("moveIt");
    advanceButton.addEventListener("click", advance, false);
    const lightsButton = document.getElementById("turnThem");
    lightsButton.addEventListener("click", toggleLights, false);
}

document.addEventListener('DOMContentLoaded', init);