//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro= 15;
let raio = diametro/2;
let xPosInicialBolinha = 300;
let yPosInicialBolinha = 200;



//velocidade bolinha
let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;

function mostraBolinha () {
   fill ('yellow')
   circle(xBolinha, yBolinha, diametro);
  
}
function movimentaBolinha(){
   xBolinha += velocidadeXBolinha;
   yBolinha += velocidadeYBolinha;
  
}
function verificaColisaoBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 2) {
    velocidadeXBolinha *= -1;
  }
   if (yBolinha + raio > height || yBolinha - raio < 2){
    velocidadeYBolinha *= -1;
  }  
}


