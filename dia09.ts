const readline = require('readline');

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(cliente) {
    this.items.push(cliente);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  list() {
    return this.items;
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const fila = new Queue();

function mostrarMenu() {
  console.log("****************************************");
  console.log(     "1 - Adicionar cliente na fila");
  console.log(     "2 - Listar todos os clientes");
  console.log(     "3 - Retirar cliente da fila");
  console.log(     "0 - Finalizar programa");
  console.log("****************************************");

  rl.question("Escolha uma opção: ", (opcao) => {
    switch (opcao) {
      case "1":
        rl.question("Digite o nome do cliente: ", (nome) => {
          fila.enqueue(nome);
          console.log(`Cliente "${nome}" adicionado à fila.`);
          mostrarMenu();
        });
        break;

      case "2":
        const clientes = fila.list();
        if (clientes.length === 0) {
          console.log("A fila está vazia.");
        } else {
          console.log("Clientes na fila:");
          clientes.forEach((cliente, index) => {
            console.log(`${index + 1}. ${cliente}`);
          });
        }
        mostrarMenu();
        break;

      case "3":
        const chamado = fila.dequeue();
        if (chamado === null) {
          console.log("A fila está vazia. Nenhum cliente para chamar.");
        } else {
          console.log(`Cliente chamado: ${chamado}`);
        }
        mostrarMenu();
        break;

      case "0":
        console.log("Programa finalizado.");
        rl.close();
        break;

      default:
        console.log("Opção inválida. Tente novamente.");
        mostrarMenu();
        break;
    }
  });
}

mostrarMenu();
