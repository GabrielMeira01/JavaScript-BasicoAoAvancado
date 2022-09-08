//escopo global
//let tem escopo de bloco
//var só tem escopo de função

const verdadeira = true;

let nome = 'Luiz'; //criando
var nome2 = 'Luiz';
var nome2 = 'Otávio'; //redeclarada
if (verdadeira) {//escopo de bloco
    let nome = 'Otávio'; //criando dentro do bloco
    var nome2 = 'Otávio'; //redeclarada novamente
    console.log(nome, nome2);

    if(verdadeira) {//outro escopo de bloco
        let nome = 'qualquer coisa' //criando dentro do bloco
        var nome2 = 'Otávio'; //redeclarada novamente
        console.log(nome, nome2);
    };
};