// function saudacao(){
//     console.log(`bom dia!`);
// };
// saudacao(); //executa a função

// function saudacaoComParametro(nome){
//     console.log(`bom dia ${nome}!`);
// };
// saudacaoComParametro("Luiz"); //executa a função com parametro

// function saudacaoComParametroERetorno(nome){
//     return `bom dia ${nome}!`
// };

// const variavel = saudacaoComParametroERetorno("Luiz"); //executa a função com parametro e retorna algo para a variavel
// console.log(variavel);

// function soma(x, y){
//     const resultado = x + y; //não é possivel utilizar esta variavel fora da função
//     return resultado
// };
// const resultado = soma(1, 1); //é possivel declarar uma variavel com o mesmo nome, pois a variavel de dentro da função não tem nada haver com o que esta fora da função 
// const resultado1 = soma(1); //irá retornar NaN
// const resultado2 = soma(); //irá retornar NaN
// const resultado3 = soma("Luiz", " Otávio"); //irá concatenar o resultado

// console.log(resultado);
// console.log(resultado1);
// console.log(resultado2);
// console.log(resultado3);

// function soma(x = 1, y = 1){  //é possivel definir valores padrões para os parametros
//     const resultado = x + y;
//     return resultado
// };
// const resultado = soma();
// const resultado1 = soma(4); //os parametros assumem o valor passado dentro do ()
// const resultado2 = soma(4,2); //os parametros assumem o valor passado dentro do ()

// console.log(resultado);
// console.log(resultado1);
// console.log(resultado2);

// const raizQuadrada = function(n){ //função anonima
//     return n ** 0.5;
// };

// console.log(raizQuadrada(9));

// const raizQuadrada = (n) => { //arrow function
//     return n ** 0.5;
// };

// const raizQuadrada = n => n ** 0.5; //quando a função tem uma linha, é possivel passa-lá desta forma (utilizando arrow function)

// console.log(raizQuadrada(9));