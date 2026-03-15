let frutas =[
    'Maçã', 'Banana', 'Laranja', 'Uva', 'Pera',
  'Manga', 'Melancia', 'Abacaxi', 'Kiwi', 'Morango',
  'Caju', 'Ameixa', 'Mamão', 'Limão', 'Tangerina',
  'Coco', 'Framboesa', 'Maracujá', 'Goiaba', 'Abacate'
]
/*
Responder às seguintes perguntas:

A. Qual elemento está na posição 0, 7, 11, 15, 18 e 20?*/ 

console.log(frutas[0]);
console.log(frutas[7]);
console.log(frutas[11]);
console.log(frutas[15]);
console.log(frutas[18]);
console.log(frutas[20]);


/*B. Qual elemento está na penúltima e última posição*/ 

console.log(frutas[frutas.length-2]);
console.log(frutas[frutas.length-1]);


/*C. Quantos elementos existem no array? */


console.log(frutas.length);


/*D. Adicione um novo elemento ao final do array. */

frutas.push('Cereja');


/*E. Imprima todos os elementos usando um for.
 */
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);}


