//tudo pode ser avaliado

/**
 * && -> todas as expressões precisam ser verdadeiras para retornar true - vai retornar "o valor mesmo"
 * || -> todas as expressões precisam ser falsas para retornar false - vai retornar "o valor verdadeiro"
 * 
 * falsy -> valores avaliados em falso
 * false -> valor literal
 * 0 -> falsy
 * "" '' `` -> falsy
 * null / undefined - falsy
 * NaN - falsy
 */

//console.log(`Luiz Otávio` && 0 && `Maria`);  //retorna 0, pois o JavaScript checa o "valor mesmo", ou seja, ele checa "Luiz Otávio" que retorna true, em seguida ele checa 0 que é a expressão falsa
//console.log(`Luiz Otávio` && true && `Maria`); //retorna o valor da ultima que foi verdadeiro, ou seja, "Maria"

function falaOi () {
    return `Oi`;
};

const vaiExecutar = false;
console.log(vaiExecutar && falaOi()); //retornará false, pois a variavel vaiExecutar esta retornando false.

console.log(0 || false || null | 'Luiz Otávio' || true); //retorna 'Luiz Otávio, pois é o primeiro valor true encontrado'

const corUsuario = null;
const corPadrao = corUsuario || "Preto";

console.log(corPadrao); //retorna preto, pois null é false

const a = 0;
const b = null;
const c = 'false'; //é verdadeiro, pois é uma string com conteudo dentro
const d = false;
const e = NaN;

console.log(a || b || c || d || e);