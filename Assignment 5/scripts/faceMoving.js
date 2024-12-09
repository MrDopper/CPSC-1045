/*
 * Name: Jackson Vi
 * Id: 100372502
 * Class: 1045
 * Instructor: Cesar
 * Section: 007
 */
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext('2d');
//For height and width, get the values from canvas instead of hard code. 
let height = canvas.height;
let width = canvas.width;
let midx = width / 2;
let midy = height / 2;
let radius = 500 / 10;
const MOVE = 20;

ctx.lineWidth = 2;
function drwFace() {
    //Draw a face
    ctx.beginPath();
    ctx.arc(midx, midy, radius, 0, Math.PI * 2);
    ctx.fillStyle = "yellow";
    ctx.stroke();
    ctx.fill();

    //Left eye ball
    ctx.beginPath();
    ctx.arc(midx - radius / 3, midy - radius / 3, radius / 5, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.stroke();
    ctx.fill();

    //Right eye ball
    ctx.beginPath();
    ctx.arc(midx + radius / 3, midy - radius / 3, radius / 5, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.stroke();
    ctx.fill();

    //Inner balls
    ctx.beginPath();
    ctx.arc(midx + radius / 3, midy - radius / 3, radius / (5 * 2.5), 0, Math.PI * 2);
    ctx.fillStyle = 'black';
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(midx - radius / 3, midy - radius / 3, radius / (5 * 2.5), 0, Math.PI * 2);
    ctx.fillStyle = 'black';
    ctx.stroke();
    ctx.fill();

    //Nose
    ctx.beginPath();
    ctx.moveTo(midx, midy + 8);
    ctx.lineTo(midx - 9, midy + 8);
    ctx.lineTo(midx + 1, midy - 1);
    ctx.stroke();


    //Mouth
    ctx.beginPath();
    ctx.arc(midx - 2, midy + 15, 20, 0, -Math.PI);
    ctx.stroke();

}
function left() {
    //reset the location and start with new one
    ctx.clearRect(0, 0, width, height);
    //Check if the face is within the left border (10 moves to the left)
    if (midx - radius - MOVE >= 0) {
        midx -= MOVE;
        drwFace();
    }
    //If it reaches the end. Stop all the movement
    else {
        drwFace();
    }
}
function right() {
    ctx.clearRect(0, 0, width, height);
    //Check if the face is within the right border
    if ((midx + radius + MOVE) <= width) {
        midx += MOVE;
        drwFace();
    }
    //If it reaches the end. Stop all the movement
    else {
        drwFace();
    }
}
function down() {
    ctx.clearRect(0, 0, width, height);
    //Check if the face is out of bottom border
    if ((midy + radius + MOVE) <= height) {
        midy += MOVE;
        drwFace();
    }
    //If it reaches the end. Stop all the movement
    else {
        drwFace();
    }
}
function up() {
    ctx.clearRect(0, 0, width, height);
    //Check if the face is out of top border
    if (midy - radius - MOVE >= 0) {
        midy -= MOVE;
        drwFace();
    }
    //If it reaches the end. Stop all the movement
    else {
        drwFace();
    }
}
//Reset function
function resetFunction() {
    //Clear everything 
    ctx.clearRect(0, 0, width, height);
    //Set the x, y to original
    midx = width / 2;
    midy = height / 2;
    drwFace();
}
function init() {
    //Call the drawing function
    drwFace();
    const moveLeft = document.getElementById("moveLeft");
    moveLeft.addEventListener("click", left, false);
    const moveRight = document.getElementById("moveRight");
    moveRight.addEventListener("click", right, false);
    const moveDown = document.getElementById("moveDown");
    moveDown.addEventListener("click", down, false);
    const moveUp = document.getElementById("moveUp");
    moveUp.addEventListener("click", up, false);
    document.getElementById("resetButton").addEventListener("click", resetFunction, false);
}
document.addEventListener("DOMContentLoaded", init);