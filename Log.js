class Log {
  constructor(x, y, height, angle) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }

    this.image = loadImage("sprites/wood2.png");

    this.body = Bodies.rectangle(x, y, 30, height, options);
    this.width = 30;
    this.height = height;
    Matter .Body.setAngle(this.body, angle);
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    stroke ("yellow");
    strokeWeight(5);
    fill(255);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
};
