const readline = require('readline');

// Cria a interface para entrada de dados
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Cria a Collection Set com 10 valores inteiros únicos
const numeros = new Set([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);

// Exibe os índices de 0 a 9
console.log("Índices:");
for (let i = 0; i < 10; i++) {
  process.stdout.write(i + " ");
}

console.log("\n\nList:");
for (let numero of numeros) {
  process.stdout.write(numero + " ");
}

// Solicita ao usuário um número
rl.question("\n\nDigite o número que você deseja encontrar: ", (input) => {
  const numeroDigitado = parseInt(input);

  if (numeros.has(numeroDigitado)) {
    console.log(`\nO número ${numeroDigitado} foi encontrado!`);
  } else {
    console.log(`\nO número ${numeroDigitado} não foi encontrado!`);
  }

  rl.close();
});
