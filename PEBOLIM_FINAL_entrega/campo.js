//variaves campo
let xL1Vertical = 3;
let xL2Vertical = 595;
let yL1Vertical = 10;
let comprimentoL1Vertical = 2;
let alturaL1Vertical = 380;

let xL1Horizontal = 3;
let yL1Horizontal = 10;
let yL2Horizontal = 390;
let alturaL1Horizontal = 1;
let comprimentoL1Horizontal = 593;

//variaveis centro campo
let xLinhaCentro = 300;
let yLinhaCentro = 10;
let alturaLinhaCentro = 380;
let comprimentoCentro = 2;

let xCirculo = 302;
let yCirculo = 195;
let diametroCirculo= 90;
let raioCirculo = diametroCirculo/2;

//variaves area gol
let xGrandeArea = 5;
let yGrandeArea = 80;
let compGrandeArea = 100;
let altGrandeArea = 250

let xGrandeAreaAdv = 495;
let yGrandeAreaAdv = 80;

let xPeqArea = 5;
let yPeqArea = 130;
let compPeqArea = 40;
let altPeqArea = 135;

let xPeqAreaAdv = 555;
let yPeqAreaAdv = 130;

function GrandeArea (){
 
     fill("#006400");
     stroke(220);
     rect(xGrandeArea,yGrandeArea, compGrandeArea, altGrandeArea);
  
}

function GrandeAreaAdversario (){
 
     fill("#006400");
     stroke(220);
     rect(xGrandeAreaAdv,yGrandeAreaAdv, compGrandeArea, altGrandeArea);
  
}
function PequenaArea (x,y){
 
     fill("#006400");
     stroke(220);
     rect(xPeqArea,yPeqArea, compPeqArea, altPeqArea);
  
}

function PequenaAreaAdversario (x,y){
 
     fill("#006400");
     stroke(220);
     rect(xPeqAreaAdv,yPeqAreaAdv, compPeqArea, altPeqArea);
     arc(105, 200, 50, 90, (PI * 3)/2, PI/2)
     arc(495, 200, 50, 90, PI/2, (PI * 3)/2)
  
}


function linhaVertical (x,y){
 
    fill(220);
    noStroke(255);
    rect(xL1Vertical, yL1Vertical, comprimentoL1Vertical, alturaL1Vertical);
  
}
function linhaVerticalEsq (x,y){
 
    fill(220);
    noStroke(255);
    rect(xL2Vertical, yL1Vertical, comprimentoL1Vertical, alturaL1Vertical);
  
}

function linhasHorizontais (x,y){
    fill(220);
    noStroke(255);
    rect(xL1Horizontal, yL1Horizontal, comprimentoL1Horizontal, alturaL1Horizontal);
  
}
function linhasHorizontaisAbaixo (x,y){
    fill(220);
    noStroke(255);
    rect(xL1Horizontal, yL2Horizontal, comprimentoL1Horizontal, alturaL1Horizontal);
  
}
function centroCampo (){
  fill(220);
  noStroke();
  rect(xLinhaCentro, yLinhaCentro,  comprimentoCentro, alturaLinhaCentro);
}


function desenhaCirculo () {
   fill("#006400");
   stroke(220);
   circle(xCirculo, yCirculo, diametroCirculo);
   fill(color('white'));
   circle(301,193,5);
   
}
