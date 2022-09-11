const elementos = [
    {tag: 'p', texto: 'frase 1'},
    {tag: 'div', texto: 'frase 2'},
    {tag: 'footer', texto: 'frase 3'},
    {tag: 'section', texto: 'frase 4'}
];

let container = document.querySelector(".container");
const div = document.createElement("div"); //cria um elemento div

for (let i = 0; i < elementos.length; i++){
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag); //cria a tag presente no objeto elementos
    let textoCriado = document.createTextNode(texto);    
    // tagCriada.innerText = texto; //como só tem texto, é utilizado o innerText
    div.appendChild(textoCriado);
    div.appendChild(tagCriada);
};

container.appendChild(div);