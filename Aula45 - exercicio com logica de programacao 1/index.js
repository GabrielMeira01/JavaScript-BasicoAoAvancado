//if
// function maiorNumero (num1, num2) {
//     if (num1 > num2) return num1;
//     return num2;
// };

//ternario
// function maiorNumero (num1, num2) {
//     return num1 > num2 ? num1 : num2;
// };

//arrow function
const maiorNumero = (num1, num2) => num1 > num2 ? num1 : num2;

//Math
// function maiorNumero (num1, num2) {
//     return Math.max(num1, num2);
// };

console.log(maiorNumero(10, 2));