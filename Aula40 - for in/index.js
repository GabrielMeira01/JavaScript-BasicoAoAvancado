//                   0        1      2
// const  frutas = ['banana', 'Pêra', 'Uva']; //pode ser chamado de vetor, pois tem uma unica dimenção

// //este for lê os indices do array, quando for um objeto, ele lerá as chaves
// for (let item in frutas) {
//     console.log(frutas[item]);
// };

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};

// const chave = 'nome';
// console.log(pessoa[chave]); //acessa dinamicamente o valor da chave

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
};