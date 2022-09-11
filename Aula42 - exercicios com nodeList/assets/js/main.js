// const paragrafos = document.querySelectorAll('.paragrafos'); //Retorna uma lista de elementos presentes no documento 
//NodeList não é um array, mas se comporta de forma similar

const paragrafos = document.querySelector('.paragrafos');
const paragrafo = paragrafos.querySelectorAll('p');
const estilosBody = getComputedStyle(document.body); 
const backgroudColorBody = estilosBody.backgroundColor;

for (let p of paragrafo) {
    //altera a cor de fundo dos paragrafos para a cor de fundo 
    p.style.backgroundColor = backgroudColorBody;
    p.style.color = '#FFFFFF';
}
