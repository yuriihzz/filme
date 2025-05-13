
let filmes = [
  { nome: "shrek", idade: 0, categorias: ["fantasia", "aventura"] },
  { nome: "narnia", idade: 0, categorias: ["fantasia", "aventura"] },
  { nome: "inesplicavel", idade: 10, categorias: ["drama", "fantasia", "aventura"] },
  { nome: "dragão", idade: 12, categorias: ["fantasia", "aventura"] },
  { nome: "a vida é bela", idade: 12, categorias: ["drama"] },
  { nome: "O menino que descobriu o vento", idade: 14, categorias: ["drama"] }
];

let idadeUsuario;
let gostaFantasia, gostaAventura, gostaDrama;
let filmesRecomendados = []; // Inicializar o array de filmes recomendados

function setup() {
  createCanvas(600, 400);
  background(240);
  textSize(16);
  fill(50);
  text("Recomendador de Filmes", 20, 30);

  // Coletar idade
  idadeUsuario = int(prompt("Qual sua idade?"));

  // Coletar preferências
  gostaFantasia = prompt("Você gosta de filmes de fantasia? (sim/não)").toLowerCase() === "sim";
  gostaAventura = prompt("Você gosta de filmes de aventura? (sim/não)").toLowerCase() === "sim";
  gostaDrama = prompt("Você gosta de filmes de drama? (sim/não)").toLowerCase() === "sim";

  for (let filme of filmes) {
    if (idadeUsuario >= filme.idade) {
      if (
        (gostaFantasia && filme.categorias.includes("fantasia")) ||
        (gostaAventura && filme.categorias.includes("aventura")) ||
        (gostaDrama && filme.categorias.includes("drama"))
      ) {
        filmesRecomendados.push(filme.nome);
      }
    }
  }

  if (filmesRecomendados.length > 0) {
    text("Filmes recomendados para você:", 20, 70);
    for (let i = 0; i < filmesRecomendados.length; i++) {
      text("- " + filmesRecomendados[i], 40, 100 + i * 25);
    }
  } else {
    text("Nenhum filme disponível para sua idade e preferências.", 20, 70);
  }
}

function draw() {
  // A função draw é chamada continuamente, mas como a lógica principal está no setup,
  // não precisamos adicionar nada aqui para este exemplo.
}
