//            01234... 
// const nome = 'Luiz Otávio';

// for (let valor of nome) { //quando utilizado of, retorna o valor
//     console.log(valor);
// };

// const nomes = ['Luiz', 'Otávio', 'Henrique'];

// for (let valor of nomes) {
//     console.log(valor);
// };

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

for (let chave of pessoa) { //da erro pois não tem indice
    console.log(chave, pessoa[chave]);
};

//for classico - geralmente com iteráveis (array ou strings)
//for in - retorna o indice ou chave (array, objetos ou strings)
//for of - retorna o valor em si (iteráveis, array ou strings)