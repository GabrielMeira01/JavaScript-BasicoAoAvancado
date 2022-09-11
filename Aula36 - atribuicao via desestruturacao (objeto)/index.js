const pessoa = {
    nome: "Luiz",
    sobrenome: "Miranda",
    idade: 30,
    endereco: {
        rua: "Av Brasil",
        numero: 320
    }
};

//Atribuição via desestruturação
const {
        nome,
        sobrenome,
        idade,
        endereco: { rua, numero} 
    } = pessoa; //extrai deste objeto e cria uma variavel com o nome 
console.log(nome, sobrenome, rua, numero);

//utilizando operador de rest
// const {
//     nome,
//     sobrenome,
//     ...resto
// } = pessoa; 

// console.log(nome, sobrenome, resto);




