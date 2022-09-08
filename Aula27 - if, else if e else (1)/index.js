//if pode ser utilizado sozinho
//sempre que utilizo else, preciso de um if antes
//posso ter varios else ifs na checagem
//só posso ter um else na checagem
//não é possivel ter mais de um else em uma checagem

/**
 * entre 0 e 11 - bom dia
 * entre 12 e 17 - boa tarde
 * entre 18 - 23 - boa noite
 */
// const hora = 50;

// if(hora >= 0 && hora <= 11) { //checa a condição, caso for versadeiro executa o bloco de codigo
//     console.log('Bom dia!');
// }else if(hora >= 12 && hora <= 17) {
//     console.log('Boa tarrde!');
// } else if(hora >= 18 && hora <= 23){
//     console.log('boa noite!');
// }else{
//     console.log('Olá');
// }

const tenhoDinheiro = true;

if(tenhoDinheiro) {
    console.log(`vou sair de casa`);
}else{
    console.log(`vou ficar em casa`);
}