//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

function marcaPonto(){
 if (xBolinha > 590 && yBolinha > 130 && yBolinha < 270){
  
        meusPontos += 1;
        ponto.play();
        xBolinha = xPosInicialBolinha
        yBolinha = yPosInicialBolinha
        setTimeout (xPosInicialBolinha, 5000);
               
}
  
 if (xBolinha < 25 && yBolinha > 139 && yBolinha < 261){
       pontosDoOponente += 1;
       ponto.play();
       xBolinha = xPosInicialBolinha
       yBolinha = yPosInicialBolinha
       setTimeout (yPosInicialBolinha, 5000);
        
  }
}

