function zeroAEsquerda(numero) {
    return numero >= 10 ? numero : `0${numero}`;
};

function obtemNomeMes(mes) {
    const meses = [`janeiro`, `fevereiro`, `março`, `abril`, `maio`, `junho`, `julho`, `agorsto`, `setembro`, `outubro`, `novembro`, `dezembro`];
    return meses[mes]
};

function obterData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = obtemNomeMes(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());

    return `${dia} de ${mes} de ${ano} ${hora}:${min}`
};

function obterDiaSemana(diaSemana) {
    let diaSemanaTexto;
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = `Domingo`;
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = `Segunda-feira`;
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = `Terça-feira`;
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = `Quarta-feira`;
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = `Quinta-feira`;
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = `Sexta-feira`;
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = `Sábado`;
            return diaSemanaTexto;
        default:
            diaSemanaTexto = ``;
            return diaSemanaTexto;
    };
};

const data = new Date();
const diaSemana = data.getDay();

const dataSemanaTexto = obterDiaSemana(diaSemana);
const dataTexto = obterData(data);

document.querySelector(`#texto`).innerHTML = `${obterDiaSemana(diaSemana)}, ${obterData(data)}`;