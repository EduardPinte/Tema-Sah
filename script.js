function setup() {
  createCanvas(500, 500);
}

function draw() {
     background("grey");
     let coloane = 8;
     let randuri =8;
     let cellSize= width / coloane;

     for(let i=0; i<coloane; i++){
        for(let j=0; j<randuri; j++){
            if((i+j)%2 == 0){
                fill("white");
            }else{
                fill("black");
            }
            rect(i * cellSize, j*cellSize  , cellSize,cellSize);
        }
     }

}

function smileyWhite(){

}