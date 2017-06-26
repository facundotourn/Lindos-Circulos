var spot = {
  x: 0,
  y: 0
};

var col = {
  r: 0,
  g: 0,
  b: 0
};

var diameter;
var drawV = true;

function setup() {
  createCanvas(600, 400);
  background(0);
  drawV = true;
  rSlider = createSlider(0, 255, 200);
  gSlider = createSlider(0, 255, 0);
  bSlider = createSlider(0, 255, 120);
  buttonP = createButton("Stop / Play");
  buttonB = createButton("Borrar");
  buttonP.mousePressed(stopPainting);
  buttonB.mousePressed(deletePainting);
}

function stopPainting() {
  drawV = !drawV;
}

function deletePainting() {
  background(0);
}

function draw() {
  if(drawV) {
    noStroke();
    strokeWeight(1);

    var d = random(10);

    if(d > 2)
      spot.x = random(width/2, width);
    else
      spot.x = random(width/2);

    spot.y = random(height);

    diameter = random(7, 15);

    col.r = rSlider.value() + random(-25, 25);
    col.g = gSlider.value() + random(-25, 25);
    col.b = bSlider.value() + random(-25, 25);

    fill(col.r, col.g, col.b, 150);
    ellipse(spot.x, spot.y, diameter, diameter);
  }
}
