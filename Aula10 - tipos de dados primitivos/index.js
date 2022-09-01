//string, number, ubdefined, boolean, symbol
const nome1 = "Luis"; //string
const nome2 = 'Luis'; //string
const nome3 = `Luis`; //string
const num1 = 10; //number
const num2 = 10.52; //number
let nomeAluno; //undefined => não aponta para local nmenhum da memória
let sobrenomeAluno = null; //nulo => não aponta para local nmenhum da memória
//quando ultilizado o null, eu, explicitamente quero que esta variável não aponte para local nenhum da memória
const aprovado = true; //é possivel inserir apenas true e false => valor lógico

//ver tipo
console.log(typeof nome1);
console.log(typeof num1);
console.log(typeof nomeAluno);
console.log(typeof sobrenomeAluno);
console.log(typeof aprovado);