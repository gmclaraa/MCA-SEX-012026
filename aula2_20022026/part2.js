let produtos = [
{ nome: "Arroz", preco: 20, estoque: 15 },
{ nome: "Feijão", preco: 8, estoque: 10 },
{ nome: "Macarrão", preco: 5, estoque: 20 },
{ nome: "Leite", preco: 6, estoque: 12 },
{ nome: "Café", preco: 18, estoque: 8 },
{ nome: "Açúcar", preco: 4, estoque: 25 },
{ nome: "Sal", preco: 2, estoque: 30 },
{ nome: "Óleo", preco: 7, estoque: 14 },
{ nome: "Farinha", preco: 9, estoque: 11 },
{ nome: "Biscoito", preco: 3, estoque: 18 }
];




// A. preço do segundo objeto
console.log(produtos[1].preco);

// B. nome do terceiro objeto
console.log(produtos[2].nome);

// C. quantidade de itens no array
console.log(produtos.length);

// D. imprimir nome de todos os objetos
for (let i = 0; i < produtos.length; i++) {
    console.log(produtos[i].nome);
}

// E. soma total do estoque
let total = 0;
for (let i = 0; i < produtos.length; i++) {
    total += produtos[i].estoque;
}
console.log(total);

// F. objeto com maior estoque
let maior = produtos[0];

for (let i = 1; i < produtos.length; i++) {
    if (produtos[i].estoque > maior.estoque) {
        maior = produtos[i];
    }
}

console.log(maior);
