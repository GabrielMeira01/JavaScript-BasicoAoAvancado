/*
 *      *aritiméticos* 
 *      + => adição e concatenação
 *      - => subtração
 *      / => divisão
 *      * => multiplicação
 *      ** => potenciação
 *      % = resto da divisão
 */

/*
 *      *atribução de valor*
 *      ++ => incremento
 *      -- => decremento
 *      
 *      += => incremento - funciona com qualquer operador aritimetico
 */

/*
 *      *precedencia*
 *      ()
 *      **
 *      * / %
 *      + -
 *
 *      em casos de utlizar a mesma precedencia, a execução é da esquerda para a direita
 */

const texto = "5";
const num1 = 5;
const num2 = 2;
const num3 = 10;

console.log(texto + num2);          //Concatenção
console.log(num2 + num3);           //Soma
console.log(num2 - num3);           //subtração
console.log(num2 / num3);           //divisão
console.log(num2 * num3);           //multiplicação
console.log(num2 ** num3);          //multiplicação
console.log(num2 % num3);           //resto da divisão
console.log((num2 + num3) * num2);  //Soma e divisão
console.log(num2 + num3 - num2);    //Soma e subtração


let contador = 1; //sempre utilizar let
// contador ++; operador de incremento
// contador --; operador de decremento
console.log(contador ++); //resultado 1, pois primeiro ele executou a ação de console.log e depois incrementou
console.log(contador); //resultado 2

let contadorPassos = 2;
contadorPassos *= 2;
console.log(contadorPassos);

//NaN = not a number
