//Continue - continual para a proxima iteração
//Break - sai do laço
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
    if (numero === 2 || numero === 5) {
        continue; //continue para a proxima interação
    };

    console.log(numero);

    if(numero === 7) {
        break; //sai do laço quando encontra a palavra break;
    };
};