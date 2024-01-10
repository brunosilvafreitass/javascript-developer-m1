// 1) Crie um programa que dado um número imprima a sua tabuada.

const numero = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${numero} X ${i} = ${i * numero}`);
}

// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = [];
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    numerosPares.push(array[i]);
  }
}
console.log("Números Pares: " + numerosPares.join(", "));

// 3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".

const nomes = [
  "Vinicius",
  "Bruno",
  "Vitoria",
  "vitor",
  "valeria",
  "carlar",
  "Carlos",
];
const nomesComV = [];

for (let i = 0; i < nomes.length; i++) {
  const nome = nomes[i];
  if (nome.startsWith("V") || nome.startsWith("v")) {
    nomesComV.push(nome);
  }
}
console.log("Nomes Com V: " + nomesComV.join(", "));

// 4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;

const numerosParesDe10a50 = [];
for (let i = 10; i <= 50; i++) {
  if (i % 2 === 0) {
    numerosParesDe10a50.push(i);
  }
}
console.log("Números Pares de 10 a 50: " + numerosParesDe10a50.join(", "));

// 5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
//    Ex de lista = [2, 7, 3, 8, 10, 4]

const media = [2, 7, 3, 8, 10, 4];
let mediasAbaixoDe5 = [];
for (let i = 0; i < media.length; i++) {
  if (media[i] < 5) {
    mediasAbaixoDe5.push(media[i]);
  }
}
console.log("Médias que ficaram de recuperação " + mediasAbaixoDe5.join(", "));

// 6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
//    Ex de lista de notas = [2, 7, 3, 8, 10, 4]

// const notas = [2, 7, 3, 8, 10, 4];
// let maiorNota = 0;
// maiorNota = Math.max(...notas);
// console.log(maiorNota);

const notas = [2, 7, 3, 8, 10, 4];
let maiorNota = 0;
for (let i = 0; i < notas.length; i++) {
  let nota = notas[i];
  if (nota > maiorNota) {
    maiorNota = nota;
  }
}
console.log(maiorNota);
