class SnowFlake {

  constructor() {
    //Set random position above canvas
    let x = random(-100, CANVAS_WIDTH);
    let y = random(-100, -10);
    this.pos = new Coordinate(x,y);
    //Set velocity with random x
    let velX = random(0,1);
    this.vel = new Coordinate(velX, 5);
  }

  draw(){
    //Draws snowflake on canvas
    stroke(255,255,255);
    strokeWeight(4);
    point(this.pos.x, this.pos.y);
  }

  fall(){
    //Animates snowflake to move down
    this.pos.x = this.pos.x + this.vel.x;
    this.pos.y = this.pos.y + this.vel.y;
    this.draw();
  }

}
