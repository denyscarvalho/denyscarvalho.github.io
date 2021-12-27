//variaves area do gol
let xAreagols = [5,590];
let yAreagols = [140,140];
let chuteGol = false;
let comprimentoAreaGol = 3;
let alturaAreaGol = 120;

function mostraAreaGol(x,y){
  for (let i=0; i < xAreagols.length; i++ ) {
    fill(0,0,0);
    rect(xAreagols[i], yAreagols[i], comprimentoAreaGol, alturaAreaGol)
  }
  
}
  
function verificaColisaoAreaGol(){
  for (let i=0; i < yAreagols.length; i++ ) {
    if (xBolinha -raio < xAreagols[i] + comprimentoAreaGol && yBolinha - raio < yAreagols[i] + alturaAreaGol && yBolinha + raio > yAreagols[i]) {
      velocidadeXBolinha *=-1;
      return marcaPonto();
     
     
    }
  }
  }
 
function verificaColisaoAreaGolB() {
  for (let i=0; i < yAreagols.length; i++ ) {
   chuteGol = collideRectCircle(xAreagols[i], yAreagols[i], comprimentoAreaGol, alturaAreaGol, xBolinha, yBolinha, raio);
    if(chuteGol){
       velocidadeXBolinha *= -1;
       return marcaPonto();
       
    }
}
  }
