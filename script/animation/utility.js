/* Function that delays for specified amount of time */
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

/* Object to represent Coordinates */
function Coordinate(x,y){
  this.x = x;
  this.y = y;
}
