let produto = {
nome: "Camiseta",
cor: "Preta",
preco: 50,
estoque: 30
};

// A. acessar o nome do objeto
console.log(produto.nome);

// B. acessar o preço usando colchetes
console.log(produto["preco"]);

// C. atualizar o estoque para 80
produto.estoque = 80;

// D. imprimir todas as propriedades
console.log(produto);