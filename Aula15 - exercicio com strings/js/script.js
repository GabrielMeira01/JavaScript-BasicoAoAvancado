// document.write("Um texto"); //Costuma não ser utilizado em projetos reais

// document.body.innerHTML = ""; //recebe o texto

// document.body.innerHTML += ""; //vai incrementar o texto recebido

const nome = prompt("digite seu nome completo:");
const quantidadeLetrasNome = nome.length;
const segundaLetraNome = nome[1];
const primeiroIndiceANome = nome.indexOf("a");
const ultimoIndiceANome = nome.lastIndexOf("a");
const ultimasTresLetrasNome = nome.slice(-3);
const palavrasNomeSeparadasPorEspaco = nome.split(" ");
const nomeMaiusculo = nome.toUpperCase();
const nomeMinusculo = nome.toLowerCase();

document.body.innerHTML += `Seu nome é: ${nome}<br />`;
document.body.innerHTML += `Seu nome tem ${quantidadeLetrasNome}letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: ${segundaLetraNome}<br />`;
document.body.innerHTML += `Qual o primeiro índice da letra LETRA no seu nome? ${primeiroIndiceANome}<br />`;
document.body.innerHTML += `Qual o último índice da letra LETRA no seu nome? ${ultimoIndiceANome}<br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${ultimasTresLetrasNome}<br />`;
document.body.innerHTML += `As palavras do seu nome são: ${palavrasNomeSeparadasPorEspaco}<br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nomeMaiusculo}<br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nomeMinusculo}<br />`;