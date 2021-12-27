//variaveis jogadores

let xJogadores = [60,400];
let yJogadores = [90,150];
let comprimentoJogador1 = 8;
let alturaJogador1 = 90;

//variaveis oponentes
let xJogadoresB = [220,540];
let yJogadoresB = [90,150];

function mostraJogador (x,y){
  for (let i=0; i < xJogadores.length; i++ ){
      fill('red');
      rect(xJogadores[i], yJogadores[i], comprimentoJogador1, alturaJogador1)
   
    }
  }
function mostraJogadorB(x,y){
    for (let i=0; i < xJogadoresB.length; i++ ){
        fill('blue');
        rect(xJogadoresB[i], yJogadoresB[i], comprimentoJogador1, alturaJogador1)
      
    }
  }
function moveJogador(){
  for (let i=0; i < yJogadores.length; i++){
      if (keyIsDown(UP_ARROW) && yJogadores[i] > 0 ){
      yJogadores[i] -=10;
    }
  for (let i=0; i < yJogadores.length; i++ ){
    if (keyIsDown(DOWN_ARROW) && yJogadores[i] + alturaJogador1 < 400  ) {
      yJogadores[i] +=10;
    }
   }
  }
 }

function verificaColisaoJogador(){
  for (let i=0; i < yJogadores.length; i++ ){
    if (xBolinha -raio < xJogadores[i] + comprimentoJogador1 && yBolinha - raio < yJogadores[i] + alturaJogador1 && yBolinha + raio > yJogadores[i]) {
      velocidadeXBolinha *=-1;
      raquetada.play();
      }
     }
    }

function verificaColisaoJogadorB() {
  for (let i=0; i < yJogadoresB.length; i++ ) {
  colidiu = collideRectCircle(xJogadoresB[i], yJogadoresB[i], comprimentoJogador1, alturaJogador1, xBolinha, yBolinha, raio);
    if (colidiu) {
        velocidadeXBolinha *= -1;
        raquetada.play();
    }
   }
  }
function movimentaJogadorAdversario() {
  for (let i=0; i < yJogadoresB.length; i++) {
    if(keyIsDown(87) && yJogadoresB[i] > 0 ) { //W
      yJogadoresB[i] -= 10;
   }
  }
  for (let i=0; i < yJogadoresB.length; i++){
    if(keyIsDown(83) && yJogadoresB[i] + alturaJogador1 < 400) { //S
      yJogadoresB[i] += 10;
     }
    }
   }