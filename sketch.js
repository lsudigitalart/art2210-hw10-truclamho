let particles = []; 

function setup() {
    createCanvas(400, 400);

    for (let i = 0; i < 100; i++) {
        let x = random(width);
        let y = random(height);
        particles.push(new Particle(x, y));
    }
}

function draw() {
    background(0);

    for (let particle of particles) { 
        particle.move();
        particle.display();
    }
}

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = random(5, 25);
        this.xSpeed = 4;
        this.ySpeed = random(1,2);
        this.color = color(random(0,255), random(100,255), random(200,255)); 
    }

    move() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        // boarder in
        if (this.x < 0 || this.x > width) this.xSpeed *= -1;
        if (this.y < 0 || this.y > height) this.ySpeed *= -1; 
    }

    display() {
        noStroke();
        fill(this.color);
        ellipse(this.x, this.y, this.size);
    }
}


