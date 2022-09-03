// alert("Mensagem"); //abre uma caixa no navegador com a informação presente no alerta

// confirm("Aceita está mensagem?");//abre uma caixa no navegador com a informação presente no alerta mas com a opção de aceitar ou negar(boolean)

// prompt("Digite o seu nome:");//abre uma caixa com um input, que deixa o usuario digitar uma mensagem

let num1 = prompt("Digte um número:");
let num2 = prompt("Digte outro número:");
num1 = Number(num1);
num2 = Number(num2);
const resultado = num1 + num2;

alert(`Seu resultado é: ${resultado}`);