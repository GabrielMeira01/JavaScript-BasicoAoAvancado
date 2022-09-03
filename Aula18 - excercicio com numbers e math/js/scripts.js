const numero = Number(prompt("Insira seu numero:"));
const numeroTitulo = document.getElementById("numero-titulo").innerHTML = numero;
const conteudoPagina = document.getElementById("conteudo-pagina");

const raizQuadrada = numero ** 0.5;
const verificaNumeroInteiro = Number.isInteger(numero);
const verificaNumeroNaN = Number.isNaN(numero);
const arredondaParaBaixo = Math.floor(numero);
const arredondaParaCima = Math.ceil(numero);
const numeroComDuasCasasDecimais = numero.toFixed(2);

conteudoPagina.innerHTML += `<p>Raiz quadrada: ${raizQuadrada}</p >`;
conteudoPagina.innerHTML += `<p>0 é inteiro: ${verificaNumeroInteiro}</p >`;
conteudoPagina.innerHTML += `<p>É NaN: ${verificaNumeroNaN}</p >`;
conteudoPagina.innerHTML += `<p>Arredondando para baixo: ${arredondaParaBaixo}</p >`;
conteudoPagina.innerHTML += `<p>Arredondando para cima: ${arredondaParaCima}</p >`;
conteudoPagina.innerHTML += `<p>Com duas casas decimais: ${numeroComDuasCasasDecimais}</p >`;