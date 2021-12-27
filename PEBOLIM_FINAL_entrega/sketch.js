  //sons do jogo
let trilhafutebol;
let raquetada;
let ponto;


function preload () {
    trilhafutebol = loadSound("sons/trilhafutebol.wav")
    ponto = loadSound("sons/ponto.mp3")
    raquetada = loadSound("sons/raquetada.mp3")
   }

function setup() {
 
  createCanvas(600, 400);
  trilhafutebol.loop();
 
}

function draw() {
  background("#006400");
  linhaVertical();
  linhasHorizontais();
  linhaVerticalEsq();
  linhasHorizontaisAbaixo();
  desenhaCirculo();
  GrandeArea ();
  GrandeAreaAdversario ();
  PequenaAreaAdversario();
  PequenaArea ();
  centroCampo ();
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraJogador();
  verificaColisaoJogador();  
  mostraJogadorB();
  mostraAreaGol ();
  mostraAreaGol ();
  moveJogador();
  movimentaJogadorAdversario();
  verificaColisaoJogadorB();
  verificaColisaoAreaGol();
  verificaColisaoAreaGolB();
  incluiPlacar();
  marcaPonto();
 
}


function incluiPlacar() {
    stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(255, 140, 0));
    rect(150, 15, 40, 20);
    fill(255);
    text(meusPontos, 170, 30);
    fill(color(255, 140, 0));
    rect(450, 15, 40, 20);
    fill(255);
    text(pontosDoOponente, 470, 30);
}



  


