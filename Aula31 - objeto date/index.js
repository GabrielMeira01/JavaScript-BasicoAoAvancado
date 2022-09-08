//objeto date é uma função contrutora
//JavaScript utiliza milisegundos
// const data = new Date(0); //01/01/1970 época unix ou timestap unix
// const tresHoras = 60 * 60 * 3 * 1000; 
// const umDia = 60 * 60 * 24 * 1000; 
// const data = new Date(0 + tresHoras + umDia); //02/jan/1970 00:00:00 GTM - 0300

// const data = new Date(2022, 3, 20, 15, 14, 27, 999); //20 de abril de 2022 15:14:27 //sem 0 a esquerda
//o mes em javascript começa em 0 e vai ate 11, ou seja, janeiro é 0

// const data = new Date('2022-04-22 20:15:59'); //formato mais utilizado
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth()); //para pegar o mes real é necessario adicionar data.getMonth() + 1
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Minutos', data.getMinutes());
// console.log('Segundos', data.getSeconds());
// console.log('Milisegundos', data.getMilliseconds());
// console.log('Dia da semana', data.getDay()); //recebe o dia da semana e não do mês //0 - domingo e 6 - sabado 
// console.log(data.toString());

// console.log(Date.now()); //obtem os milesimos de segundo do marco 0 até o dia atual em milisegundos

function zeroAEsquerda (numero) {
    return numero >= 10 ? numero : `0${numero}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minuto = zeroAEsquerda(data.getMinutes());
    const segundo = zeroAEsquerda(data.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`
};

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);