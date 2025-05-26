function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}let pessoasCampo = []; // Pessoas no campo
let pessoasCidade = []; // Pessoas na cidade

let luzesCidade = false; // Estado das luzes da cidade

function setup() {
  createCanvas(800, 400);
  // Criar pessoas no campo
  for (let i = 0; i < 10; i++) {
    pessoasCampo.push(new Pessoa(random(50, 200), random(height - 100, height), random(20, 40), color(random(255), random(255), random(255))));
  }
  // Criar pessoas na cidade
  for (let i = 0; i < 10; i++) {
    pessoasCidade.push(new Pessoa(random(600, 750), random(height - 100, height), random(20, 40), color(random(255), random(255), random(255))));
  }
}

function draw() {
  background(200); // Fundo da cena
  // Exibir ambiente do campo
  cenarioCampo();
  // Exibir ambiente da cidade
  cenarioCidade();
  
  // Exibir as pessoas no campo
  for (let pessoa of pessoasCampo) {
    pessoa.mover();
    pessoa.dancar();
    pessoa.display();
  }
  
  // Exibir as pessoas na cidade
  for (let pessoa of pessoasCidade) {
    pessoa.mover();
    pessoa.dancar();
    pessoa.display();
  }
  
  // Mudar o estado das luzes da cidade a cada 2 segundos
  if (frameCount % 120 == 0) {
    luzesCidade = !luzesCidade;
  }
}

function cenarioCampo() {
  // Fundo do campo
  fill(34, 139, 34); // Verde
  rect(0, 0, width / 2, height); 
  
  // Árvores
  fill(139, 69, 19); // Tronco de árvore
  rect(100, height - 120, 20, 50); 
  fill(0, 255, 0); // Folhas
  ellipse(110, height - 150, 60, 60);
  
  // Casa no campo
  fill(255, 228, 196); // Cor da casa
  rect(150, height - 170, 50, 40);
  
  // Texto indicando campo
  fill(255);
  textSize(24);
  text("Campo", 100, 50);
}

function cenarioCidade() {
  // Fundo da cidade
  fill(169, 169, 169); // Cinza
  rect(width / 2, 0, width / 2, height);
  
  // Prédios
  fill(105, 105, 105); // Prédio cinza
  rect(600, height - 150, 50, 100); // Prédio 1
  rect(670, height - 120, 70, 70); // Prédio 2
  
  // Carros na rua
  fill(255, 0, 0);
  rect(620, height - 40, 40, 20); // Carro 1
  
  // Luzes piscando na cidade
  if (luzesCidade) {
    fill(255, 255, 0); // Luz amarela
    ellipse(650, height - 60, 15, 15); // Luz da rua
  }
  
  // Texto indicando cidade
  fill(255);
  textSize(24);
  text("Cidade", width - 180, 50);
}

// Classe Pessoa - Representa as pessoas na festa
class Pessoa {
  constructor(x, y, tamanho, cor) {
    this.x = x;
    this.y = y;
    this.tamanho = tamanho;
    this.cor = cor;
    this.velocidadeY = random(1, 3); // Velocidade de movimento
  }

  mover() {
    // Movimento vertical de dança
    this.y += sin(frameCount * 0.1 + this.x * 0.05) * this.velocidadeY;
  }

  dancar() {
    // Movimento horizontal simula o "balanço" de dança
    this.x += sin(frameCount * 0.05 + this.y * 0.1) * 2;
  }

  display() {
    fill(this.cor);
    noStroke();
    ellipse(this.x, this.y, this.tamanho, this.tamanho);
  }
}