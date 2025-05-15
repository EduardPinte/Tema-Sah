function setup() {
  createCanvas(400, 400);
  noLoop(); 
}

function draw() {
  background("grey");
  let coloane = 8;
  let randuri = 8;
  let cellSize = width / coloane;

  for (let i = 1; i <= coloane; i++) {
    for (let j = 1; j <= randuri; j++) {
      if ((i + j) % 2 == 0) {
        fill("white");
      } else {
        fill("black");
      }

      rect((i - 1) * cellSize, (j - 1) * cellSize, cellSize, cellSize);

      let x = (i - 1) * cellSize + cellSize / 2;
      let y = (j - 1) * cellSize + cellSize / 2;
      let d = cellSize * 0.6;

     
      if (i % 2 == 0 && j == 2) {
        smileyWhite(x, y, d, "grey");
      }
      if (j == 3 && (i == 1 || i == 5)) {
        smileyWhite(x, y, d, "grey");
      }
      if (j == 4 && (i == 3 || i == 7)) {
        smileyWhite(x, y, d, "grey");
      }
      if (j == 5 && (i == 2 || i == 5)) {
        smileyWhite(x, y, d, "white");
      }
      if (j == 6 && (i == 4 || i == 6 || i == 8)) {
        smileyWhite(x, y, d, "white");
      }
      if (j == 7 && (i == 1 || i == 3 || i == 7)) {
        smileyWhite(x, y, d, "white");
      }
    }
  }
}


function smileyWhite(x, y, diameter, faceColor) {
  fill(faceColor);
  stroke(0);
  strokeWeight(1);
  circle(x, y, diameter);


  let eyeOffsetX = diameter * 0.2;
  let eyeOffsetY = diameter * 0.2;
  let eyeSize = diameter * 0.1;

  fill(0);
  noStroke();
  circle(x - eyeOffsetX, y - eyeOffsetY, eyeSize); // ochi stâng
  circle(x + eyeOffsetX, y - eyeOffsetY, eyeSize); // ochi drept

  // Gură
  noFill();
  stroke(0);
  strokeWeight(2);
  let mouthRadius = diameter * 0.25;
  arc(x, y + diameter * 0.1, mouthRadius * 2, mouthRadius, 0, PI); // arc zâmbet
}
