function draw() {
    const ROWS = 8;
    const COLUMNS = 8;
    const SIDE = 25;
    const DISTANCE = Math.sqrt(Math.pow(SIDE, 2) + Math.pow(SIDE, 2));
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    //I need to multiply by squareroot of 2 in order to increase the gap
    canvas.width = DISTANCE * COLUMNS * Math.sqrt(2);
    canvas.height = DISTANCE * ROWS * Math.sqrt(2);
    let xValue, yValue;
    for (let i = 0; i < COLUMNS; i++) {
        yValue = SIDE + i * DISTANCE * Math.sqrt(2);
        for (let j = 0; j < ROWS; j++) {
            xValue = SIDE + j * DISTANCE * Math.sqrt(2);
            let red = 0, green = 0, blue = 0;
            //Because there is three different colour
            if (j % 3 === 0) {
                red = (i + 1) * 25;
            }
            if (j % 3 === 1) {
                green = (i + 1) * 25;
            }
            if (j % 3 === 2) {
                blue = (i + 1) * 25;
            }
            ctx.fillStyle = `rgb(${red}, ${green}, ${blue})`;
            ctx.beginPath();
            ctx.moveTo(xValue, yValue - SIDE);
            ctx.lineTo(xValue + SIDE, yValue);
            ctx.lineTo(xValue, yValue + SIDE);
            ctx.lineTo(xValue - SIDE, yValue);
            ctx.closePath();
            ctx.stroke();
            ctx.fill();
        }
    }
}
function init() {
    draw();
}
document.addEventListener("DOMContentLoaded", init);