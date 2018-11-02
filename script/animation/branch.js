class Branch {
  constructor(begin, end) {
    this.begin = begin;
    this.end = end;
    this.finished = false;
  }

  show(r,g,b){
    //Draw Branch on canvas
    stroke(r,g,b);
    line(this.begin.x, this.begin.y, this.end.x, this.end.y);
    this.finished = true;
  }

  branch() {
    //Angle of branch rotation
    const ANGLE = PI / 6;

    //Create new right branch
    var lineR = p5.Vector.sub(this.end, this.begin);
    lineR.rotate(ANGLE);
    lineR.mult(0.67);
    var newREnd = p5.Vector.add(this.end, lineR);
    let right = new Branch(this.end, newREnd);

    //Create new left branch
    var lineL = p5.Vector.sub(this.end, this.begin);
    lineL.rotate(-ANGLE);
    lineL.mult(0.67);
    var newLEnd = p5.Vector.add(this.end, lineL);
    let left = new Branch(this.end, newLEnd);

    //Return both branches
    return [right, left];
  }
}
