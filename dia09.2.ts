const readline = require('readline');

class Stack {
  constructor() {
    this.items = [];
  }

  push(livro) {
    this.items.push(livro);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop();
  }

  list() {
    return [...this.items].reverse(); 
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const pilha = new Stack();

function mostrarMenu() {
  console.log("*************************************");
  console.log("1 - Adicionar livro na pilha");
  console.log("2 - Listar todos os livros");
  console.log("3 - Retirar livro da pilha");
  console.log("0 - Finalizar programa");
  console.log("*************************************")

  rl.question("Escolha uma opção: ", (opcao) => {
    switch (opcao) {
      case "1":
        rl.question("Digite o nome do livro: ", (nome) => {
          pilha.push(nome);
          console.log(`📗 Livro "${nome}" adicionado à pilha.`);
          mostrarMenu();
        });
        break;

      case "2":
        const livros = pilha.list();
        if (livros.length === 0) {
          console.log(" A pilha está vazia.");
        } else {
          console.log(" Livros na pilha (do topo para base):");
          livros.forEach((livro, index) => {
            console.log(`${index + 1}. ${livro}`);
          });
        }
        mostrarMenu();
        break;

      case "3":
        const retirado = pilha.pop();
        if (retirado === null) {
          console.log(" A pilha está vazia. Nenhum livro para retirar.");
        } else {
          console.log(` Livro retirado: ${retirado}`);
        }
        mostrarMenu();
        break;

      case "0":
        console.log(" Programa finalizado.");
        rl.close();
        break;

      default:
        console.log(" Opção inválida. Tente novamente.");
        mostrarMenu();
        break;
    }
  });
}

mostrarMenu();
