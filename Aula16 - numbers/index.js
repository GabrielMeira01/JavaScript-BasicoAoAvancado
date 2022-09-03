//JavaScript segue um padrão, sendo ele IEEE 754-2008
let num1 = 0.7;   //number
let num2 = 0.1; //number
num1 += num2;
num1 += num2;
num1 += num2;

num1 = parseFloat(num1.toFixed(2));//corrige a imprecisão
console.log(num1); 

// console.log(num1 + num2); //number
// console.log(num1.toString() + num2.toString()); //text

//console.log(num1.toString(2)); //representação binaria
// console.log(num1.toFixed(2)); //escolher a quantidade de casas decimais
//console.log(Number.isInteger(num1)); //verifica se o numero é inteiro

// let temp = num1 * "5";
// console.log(Number.isNaN(temp)); //verifica se o numero é NaN

