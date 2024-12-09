const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext('2d');

let x = canvas.width / 2;
let y = canvas.height / 2;
let dx = 5; // Horizontal movement speed
let radius = 50;
const SPEED = 100;
let animationInterval;
let colors = ["Yellow", "Gold", "Orange", "Red", "Crimson", "DarkRed", "Purple", "Blue", "Cyan", "LightBlue"]; // Array of colors to cycle through
let colorIndex = 0; //A default color setup

function drwFace(x, y, color) {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas everytime the function is called
    ctx.lineWidth = 2; //Make the line more visible

    // Draw face
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.stroke();
    ctx.fill();

    // Draw left eye
    ctx.beginPath();
    ctx.arc(x - radius / 3, y - radius / 3, radius / 5, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.stroke();
    ctx.fill();

    // Draw right eye
    ctx.beginPath();
    ctx.arc(x + radius / 3, y - radius / 3, radius / 5, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.stroke();
    ctx.fill();

    // Inner eye pupils
    ctx.beginPath();
    ctx.arc(x + radius / 3, y - radius / 3, radius / (5 * 2.5), 0, Math.PI * 2);
    ctx.fillStyle = 'black';
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x - radius / 3, y - radius / 3, radius / (5 * 2.5), 0, Math.PI * 2);
    ctx.fillStyle = 'black';
    ctx.stroke();
    ctx.fill();

    // Draw nose
    ctx.beginPath();
    ctx.moveTo(x, y + 8);
    ctx.lineTo(x - 9, y + 8);
    ctx.lineTo(x + 1, y - 1);
    ctx.stroke();

    // Draw mouth
    ctx.beginPath();
    ctx.arc(x - 2, y + 15, 20, 0, -Math.PI);
    ctx.stroke();
}

function startAnimation() {
    document.getElementById("startMoving").disabled = true; //Allow the start button to be clicked
    document.getElementById("stop").disabled = false;
    document.getElementById("reset").disabled = true;

    // Start moving the face horizontally
    animationInterval = setInterval(() => {
        // Update horizontal position
        x += dx;

        // Bounce off left and right edges and change color
        if (x + radius >= canvas.width || x - radius <= 0) {
            dx = -dx; // Reverse horizontal direction
            colorIndex = (colorIndex + 1) % colors.length; // Cycle to the next color
            document.getElementById("colourName").innerHTML = colors[colorIndex];
        }

        // Redraw face at new position with the current color
        drwFace(x, y, colors[colorIndex]);
    }, SPEED);
}

function stopAnimation() {
    document.getElementById("startMoving").disabled = false;
    document.getElementById("stop").disabled = true;
    document.getElementById("reset").disabled = false;
    clearInterval(animationInterval);
}

function resetAnimation() {
    document.getElementById("startMoving").disabled = false;
    document.getElementById("stop").disabled = true;
    document.getElementById("reset").disabled = true;
    clearInterval(animationInterval);

    // Reset to initial position and color
    x = canvas.width / 2;
    y = canvas.height / 2;
    colorIndex = 0;
    drwFace(x, y, colors[colorIndex]);
}

function init() {
    //first draw a face om the scene by using yellow as a default color
    drwFace(x, y, colors[colorIndex]);
    document.getElementById("startMoving").addEventListener("click", startAnimation);
    document.getElementById("stop").addEventListener("click", stopAnimation);
    document.getElementById("reset").addEventListener("click", resetAnimation);
}

document.addEventListener("DOMContentLoaded", init);



//Some pratices that move the face adjances

// const canvas = document.getElementById("myCanvas");
// const ctx = canvas.getContext('2d');

// let x = canvas.width / 2;
// let y = canvas.height / 2;
// let dx = 5; // Horizontal movement speed
// let dy = 5; // Vertical movement speed
// let radius = 50;
// let animationInterval;
// let colors = ["yellow", "lightblue"]; // Color array to cycle through
// let colorIndex = 0;

// function drwFace(x, y, color) {
//     ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
//     ctx.lineWidth = 2;

//     // Draw face
//     ctx.beginPath();
//     ctx.arc(x, y, radius, 0, Math.PI * 2);
//     ctx.fillStyle = color;
//     ctx.stroke();
//     ctx.fill();

//     // Draw left eye
//     ctx.beginPath();
//     ctx.arc(x - radius / 3, y - radius / 3, radius / 5, 0, Math.PI * 2);
//     ctx.fillStyle = 'white';
//     ctx.stroke();
//     ctx.fill();

//     // Draw right eye
//     ctx.beginPath();
//     ctx.arc(x + radius / 3, y - radius / 3, radius / 5, 0, Math.PI * 2);
//     ctx.fillStyle = 'white';
//     ctx.stroke();
//     ctx.fill();

//     // Inner eye pupils
//     ctx.beginPath();
//     ctx.arc(x + radius / 3, y - radius / 3, radius / (5 * 2.5), 0, Math.PI * 2);
//     ctx.fillStyle = 'black';
//     ctx.stroke();
//     ctx.fill();
//     ctx.beginPath();
//     ctx.arc(x - radius / 3, y - radius / 3, radius / (5 * 2.5), 0, Math.PI * 2);
//     ctx.fillStyle = 'black';
//     ctx.stroke();
//     ctx.fill();

//     // Draw nose
//     ctx.beginPath();
//     ctx.moveTo(x, y + 8);
//     ctx.lineTo(x - 9, y + 8);
//     ctx.lineTo(x + 1, y - 1);
//     ctx.stroke();

//     // Draw mouth
//     ctx.beginPath();
//     ctx.arc(x - 2, y + 15, 20, 0, -Math.PI);
//     ctx.stroke();
// }

// function startAnimation() {
//     document.getElementById("startMoving").disabled = true;
//     document.getElementById("stop").disabled = false;
//     document.getElementById("reset").disabled = true;

//     // Start moving the face
//     animationInterval = setInterval(() => {
//         // Update position
//         x += dx;
//         y += dy;

//         // Bounce off edges and change color
//         if (x + radius > canvas.width || x - radius < 0) {
//             dx = -dx; // Reverse horizontal direction
//             colorIndex = (colorIndex + 1) % colors.length; // Change color
//         }
//         if (y + radius >= canvas.height || y - radius <= 0) {
//             dy = -dy; // Reverse vertical direction
//             colorIndex = (colorIndex + 1) % colors.length; // Change color
//         }

//         // Redraw face at new position
//         drwFace(x, y, colors[colorIndex]);
//     }, 100);
// }

// function stopAnimation() {
//     document.getElementById("startMoving").disabled = false;
//     document.getElementById("stop").disabled = true;
//     document.getElementById("reset").disabled = false;
//     clearInterval(animationInterval);
// }

// function resetAnimation() {
//     document.getElementById("startMoving").disabled = false;
//     document.getElementById("stop").disabled = true;
//     document.getElementById("reset").disabled = true;
//     clearInterval(animationInterval);

//     // Reset to initial position and color
//     x = canvas.width / 2;
//     y = canvas.height / 2;
//     colorIndex = 0;
//     drwFace(x, y, colors[colorIndex]);
// }

// function init() {
//     drwFace(x, y, colors[colorIndex]);
//     document.getElementById("startMoving").addEventListener("click", startAnimation);
//     document.getElementById("stop").addEventListener("click", stopAnimation);
//     document.getElementById("reset").addEventListener("click", resetAnimation);
// }

// document.addEventListener("DOMContentLoaded", init);