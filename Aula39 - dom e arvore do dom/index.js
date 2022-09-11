//varios elementos são filhos de outros elementos

/**
 * exemplo:
 * 
 * window é pai de document
 * document que é pai de html
 * html que é pai de head
 * head que é pai de body
 * body que é pai de section
 * section que é pai de h1
 * h1 que é pai de um nó de texto
 */

// const elementos = [
//     {tag: 'p', texto: 'frase 1'},
//     {tag: 'div', texto: 'frase 2'},
//     {tag: 'footer', texto: 'frase 3'},
//     {tag: 'section', texto: 'frase 4'}
// ];
// let container = document.querySelector(".container");
// const div = document.createElement("div"); //cria um elemento, que nomomento não é filho de ninguem (esta presente apenas na variavel)

// for (let i = 0; i < elementos.length; i++){
//     let {tag, texto} = elementos[i];
//     let tagCriada = document.createElement(tag); //cria um elemento, que nomomento não é filho de ninguem (esta presente apenas na variavel)
//     //Cria um nó de texto - createTextNode
//     let textoCriado = document.createTextNode(texto); //cria um elemento, que nomomento não é filho de ninguem (esta presente apenas na variavel)   
//     div.appendChild(textoCriado); //adiciona um filho nesta tag
//     div.appendChild(tagCriada); //adiciona a tag criada na div
// };

// container.appendChild(div); //adiciona a div criada na div container