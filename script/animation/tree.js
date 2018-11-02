//Length of root
const LEN = 130;

/* Class to represent tree */
class Tree {
  constructor() {
    //Array of Branches
    this.branches = [];
    //Current Generations of Branches
    this.counter = 0;
    //Array to hold leaves
    this.leaves = [];
    //Array to represent rgb value of tree
    this.colour = [105, 85, 50];
  }

  drawMainStem(r,g,b){
    //Draw Main Stem
    stroke(r,g,b);
    strokeWeight(10);
    let bottom = createVector(CANVAS_WIDTH/2,CANVAS_HEIGHT);
    let top = createVector(CANVAS_WIDTH/2,CANVAS_HEIGHT - LEN);
    line(bottom.x, bottom.y, top.x, top.y);
    //First Branch
    let root = new Branch(bottom,top);
    this.branches.push(root);
  }

  growBranches(r,g,b){
    //Line Colour
    stroke(r,g,b);
    for (var i = this.branches.length-1; i >= 0; i--) {
      if(this.branches[i].finished){
        continue;
      }
      //Add 2 new branches
      let children = this.branches[i].branch()
      this.branches = this.branches.concat(children);
      //Line Thickness
      strokeWeight(10/this.counter);
      this.branches[i].show(r,g,b);
    }
    //Increment counter
    this.counter++;
  }

  drawTree(r,g,b){
    //Reset counter
    this.counter = 0;
    strokeWeight(10);
    for (let i = 0; i < this.branches.length; i++) {
      for (var j = 0; j < LIMIT; j++) {
        if(i == Math.pow(2,j) - 1){
          this.counter++;
          strokeWeight(10/this.counter);
        }
      }
      this.branches[i].show(r,g,b);
    }
  }

  reset(){
    //Reset
    clear();
    this.counter = 0;
    this.points = [];
    this.leaves = [];
    this.branches = [];
    this.colour = [105, 85, 50];
  }

  transitionToWhite(){
    for (var i = 0; i < this.colour.length; i++) {
      if(this.colour[i] >= 255){
        continue;
      }
      this.colour[i] += 1
      sleep(20);
    }
  }

}
