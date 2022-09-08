const form = document.querySelector(`#form`);
const resultado =document.querySelector(`#resultado`);

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const peso = document.querySelector(`#input-peso`).value;
    const alturaEmM = document.querySelector(`#input-altura`).value;

    const imc = calculaIMC(peso, alturaEmM);
    const faixaIMC = verificaFaixaIMC(imc);
    if(Number.isInteger(peso)){
        resultado.innerHTML = `Valor inserido no campo "Peso" não é um numero`;
    } else if(Number.isInteger(alturaEmM)){
        resultado.innerHTML = `Valor inserido no campo "Altura" não é um numero`;
    } else{
        faixaIMC;
    };
});

function verificaFaixaIMC(calculoIMC) {
    if(calculoIMC <= 18.4) {
        return resultado.innerHTML = `Abaixo do peso`;
    } else if(calculoIMC >= 18.5 && calculoIMC <= 24.9) {
        return resultado.innerHTML = `Peso normal`;
    } else if(calculoIMC >= 25 && calculoIMC <= 29.9) {
        return resultado.innerHTML = `Sobrepeso`;
    } else if(calculoIMC >= 30 && calculoIMC <= 34.9) {
        return resultado.innerHTML = `Obesidade grau 1`;
    } else if(calculoIMC >= 35 && calculoIMC <= 39.9) {
        return resultado.innerHTML = `Obesidade grau 2`;
    } else if(calculoIMC >= 40){
        return resultado.innerHTML = `Obesidade grau 3`;
    } else {
        return resultado.innerHTML = `Erro, resultado não esta na faixa do IMC`;
    };
};

function calculaIMC(peso, altura) {
    const resultado = peso / (altura * altura);
    return resultado.toFixed(2);
};
