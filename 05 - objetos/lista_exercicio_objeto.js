// 1) Crie uma classe para representar carros.
// Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
// Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor
// gasto em reais para realizar este percurso.

class Carro {
  Marca;
  Cor;
  GastoMedioPorKM;

  constructor(marca, cor, gastoMedioPorKm) {
    this.Marca = marca;
    this.Cor = cor;
    this.GastoMedioPorKM = gastoMedioPorKm;
  }

  ExibirInformacoes() {
    console.log(
      `Marca: ${this.Marca}, Cor: ${this.Cor}, Gasto: ${this.GastoMedioPorKM}`
    );
  }

  CalcularGastoDePercurso(distacia, precoCombustivel) {
    return distacia * this.GastoMedioPorKM * precoCombustivel;
  }
}

const uno = new Carro("Fiat", "Preto", 1 / 12);

const result = uno.CalcularGastoDePercurso(70, 5);
console.log(result);
uno.ExibirInformacoes();

// 2) Crie uma classe para representar pessoas.
// Para cada pessoa teremos os atributos nome, peso e altura.
// As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
// Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
// do seu IMC;
console.log("\n IMC");
class Pessoa {
  Nome;
  Peso;
  Altura;

  constructor(nome, peso, altura) {
    this.Nome = nome;
    this.Peso = peso;
    this.Altura = altura;
  }

  CalcularIMC() {
    return this.Peso / (this.Altura * this.Altura);
  }

  ClassificarIMC() {
    const imc = this.CalcularIMC();

    if (imc < 18.5) {
      return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
      return "Peso normal";
    } else if (imc >= 25 && imc < 30) {
      return "Acima do peso";
    } else if (imc >= 30 && imc < 40) {
      return "Obeso";
    } else {
      return "Obsedidade Grave";
    }
  }
}

const bruno = new Pessoa("Bruno", 75, 1.8);

console.log(bruno.ClassificarIMC());
