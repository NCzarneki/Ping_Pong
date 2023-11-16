// Variáveis da bolinha

let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

// Velocidade da Bolinha

let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;

let colidiu = false;

// Variáveis da raquete

let xRaquete = 5;
let yRaquete = 150;
let raqueteLargura = 10;
let raqueteAltura = 90;

let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente ;


// variáveis de placar

let meusPontos = 0;
let pontosOponente = 0;



function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
 rect(xRaquete,yRaquete,raqueteLargura,raqueteAltura);
  movimentaBolinha();
  movimentarMinhaRaquete();
  movimentaRaqueteOponente();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  verificaColisaoRaquete(xRaquete, yRaquete);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
  
  
  circle(xBolinha, yBolinha, diametro);  
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;

  if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= - 1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= - 1;
  }  
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda (){
  if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= - 1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= - 1;
  }  
}

function mostraRaquete(x,y){
  fill("green");
  rect(x,y,raqueteLargura,raqueteAltura);
}

function mostraRaqueteOponente(){
  rect(xRaqueteOponente,yRaqueteOponente,raqueteLargura,raqueteAltura);
}

function movimentarMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function verificaColisaoRaquete(x,y){
  colidiu = collideRectCircle(x, y, raqueteLargura, raqueteAltura, xBolinha, yBolinha, raio)
  
  if(colidiu){
    
    velocidadeXBolinha *= -1;
  }
  
}

function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteLargura/2 - 90;
  yRaqueteOponente += velocidadeYOponente;
}

function incluiPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill("white");
  
  // placar meusPontos
  fill("orange");
  rect(135, 10, 35, 20);
  fill("white");
  text(meusPontos, 150, 26);
  
  // placar pontosOponentes
  fill("orange");
  rect(430, 10, 35, 20); 
  fill("white");
  text(pontosOponente, 450, 26);
}

function marcaPonto(){
  
  if (xBolinha > 590){
    meusPontos += 1;
  }
  
  if (xBolinha < 10){
    pontosOponente += 1;
  }
}