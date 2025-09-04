const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const numeros = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

console.log("Índices:");
for (let i = 0; i < numeros.length; i++) {
  process.stdout.write(i + " ");
}

console.log("\nArray:");
numeros.forEach(num => process.stdout.write(num + " "));

rl.question("\n\nDigite o número que você deseja encontrar: ", (input) => {
  const numeroBuscado = parseInt(input);
  const posicao = numeros.indexOf(numeroBuscado);

  if (posicao !== -1) {
    console.log(`\nO número ${numeroBuscado} está localizado na posição: ${posicao}`);
  } else {
    console.log(`\nO número ${numeroBuscado} não foi encontrado!`);
  }

  rl.close();
});
