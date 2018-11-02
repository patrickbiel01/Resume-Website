/*
  Project Notes:
    - Tree Colour: rgb(105, 85, 50)
    - Based off of Coding Train - Object-Oriented Fractal Tree on YouTube
*/

//Dimensions of canvas
const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 400;

//Various States of animation
const SETUP = 0;
const TREE_GROWING = 1;
const LEAVES_GROWING = 2;
const LEAVES_CHANGING = 3;
const LEAVES_FALLING = 4;
const WINTER = 5;
const DONE = 6;

//Max number of Generations
const LIMIT = 6;
const NUM_LEAVES = 25;

//Current State of Animation
let state = SETUP;
//Tree Object
let tree = new Tree();
//Array for snowflakes
let snow = [];
//Bool for chnaging Leaves
let finished = false;

/* Function called when page is loaded */
function setup() {
  //Insert Canvas
  let canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  canvas.parent("canvasContainer");
}

/* Function called constantly */
function draw() {

  if (state === SETUP) {
    //Set Background Colour
    background(130, 190, 235);
    sleep(250);
    tree.drawMainStem(105, 85, 50);
    //Move to next stage
    state = TREE_GROWING;
  }

  else if (state === TREE_GROWING){
    sleep(500);
    tree.growBranches(105, 85, 50);
    if(tree.counter >= LIMIT){
      state = LEAVES_GROWING;
    }
  }

  else if (state === LEAVES_GROWING) {
    sleep(250);
    for (var i = tree.branches.length-1; i >= NUM_LEAVES; i--) {
      let leaf = new Leaf(new Coordinate(tree.branches[i].end.x, tree.branches[i].end.y));
      tree.leaves.push(leaf);
      leaf.draw();
    }
    state = LEAVES_CHANGING;
  }

  else if (state === LEAVES_CHANGING) {
    //Change colour of all leaves
    finished = true;
    for (var i = 0; i < tree.leaves.length; i++) {
      tree.leaves[i].transition();
      for (var j = 0; j < 3; j++) {
        if(tree.leaves[i].colour[j] !== tree.leaves[i].randColour[j]){
          finished = false;
        }
      }
    }
    if(finished){
      state = LEAVES_FALLING;
    }
  }

  else if (state === LEAVES_FALLING) {
    //Clear Canvas
    background(130, 190, 235);
    //Instantaneously Draw Tree
    tree.drawTree(105, 85, 50);
    //Animate Leaves Falling
    for (var i = 0; i < tree.leaves.length; i++) {
      tree.leaves[i].fall();
    }
    //Check Leaf position
    for (var i = 0; i < tree.leaves.length; i++) {
      if (tree.leaves[i].position.y < CANVAS_HEIGHT + 50) {
        return
      }
    }
    state = WINTER;
  }

  else if (state === WINTER) {
    for (var i = 0; i < 70; i++) {
      snow.push(new SnowFlake());
      snow[i].draw();
    }
    tree.transitionToWhite();
    tree.drawTree(tree.colour[0], tree.colour[1], tree.colour[2]);
    for (var i = 0; i < snow.length; i++) {
      snow[i].fall();
    }
    if(tree.colour[2] >= 255){
      state = DONE;
      sleep(500);
    }
  }

  else if (state === DONE) {
    sleep(1000);
    tree.reset();
    state = SETUP;
    snow = [];
  }

}
