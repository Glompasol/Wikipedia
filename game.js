const canvas = document.getElementById("canvas");

const score = document.getElementById("score");

const ctx = canvas.getContext("2d")

let birdX = 80;
let birdY = 250;
let velocity = 0;
let gravity = 0.5;
let jump = -8;

let clicked = false;

let Score = 0
let HighScore = 0

let pipes = [];
let pipegap = 140;
let pipeWidth = 60;
let pipeSpeed = 2;

pipes.push(createPipe());

function createPipe() {
    const topHeight = Math.random() * 250 + 50;
    return {
        x: canvas.width,
        top: topHeight,
        bottom: topHeight + pipegap
    };
}

function update() {
    velocity += gravity;
    birdY += velocity;

    for (let p of pipes) {
        p.x -= pipeSpeed;

        if (p.x + pipeWidth < 0) {
            pipes.shift();
            pipes.push(createPipe());
            Score += 1
            score.textContent = "Score: "+Score
        }

        if (birdX + 20 > p.x && birdX < p.x + pipeWidth && (birdY < p.top || birdY + 20 > p.bottom)) {
            location.reload();
        }
    }

    if (birdY > canvas.height || birdY < 0) {
        location.reload();
    }

    draw();

    requestAnimationFrame(update);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "yellow";
    ctx.fillRect(birdX, birdY, 20, 20);

    ctx.fillStyle = "green";
    for (let p of pipes) {
        ctx.fillRect(p.x, 0, pipeWidth, p.top);
        ctx.fillRect(p.x, p.bottom, pipeWidth, canvas.height - p.bottom);
    }
}

document.addEventListener("click", () => {    
    velocity = jump;
    if (clicked === false) {
        update();
        clicked = true;
    }
// All i know is that... i know nothing... - Kanye West
});

ctx.fillText('Click to start game', canvas.width / 2, canvas.height / 2);