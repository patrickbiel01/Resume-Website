/* Class to represent leaves */
class Leaf {
  constructor(position) {
    //Store current position
    this.position = position;
    //Set random velocity
    let x = random(1,3);
    let y = random(2,3);
    this.vel = new Coordinate(x, y);
    //Set colour to green
    this.colour = [58, 95, 11];
    //Set random colour
    let r = int(random(150, 255));
    let g = int(random(100, 150));
    let b = int(random(10, 80));
    this.randColour = [r,g,b];
  }
  fall() {
    //Animates leaves to move down
    this.position.x = this.position.x + this.vel.x;
    this.position.y = this.position.y + this.vel.y;
    this.draw();
    //Add delay
    sleep(0.3);
  }

  draw(){
    //Draw Leaf on canvas
    strokeWeight(1);
    stroke(0);
    fill(this.colour[0], this.colour[1], this.colour[2]);
    ellipse(this.position.x, this.position.y, 20,10);
  }

  transition(){
    for (var i = 0; i < this.colour.length; i++) {
      if(this.colour[i] === this.randColour[i]){
        continue;
      }else if (this.colour[i] > this.randColour[i]) {
        this.colour[i]--;
      }else if (this.colour[i] < this.randColour[i]) {
        this.colour[i]++;
      }
    }
    this.draw();
  }

}
