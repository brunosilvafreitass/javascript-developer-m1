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

const nomes = [];

// 4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;

// 5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
//    Ex de lista = [2, 7, 3, 8, 10, 4]

// 6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
//    Ex de lista de notas = [2, 7, 3, 8, 10, 4]
