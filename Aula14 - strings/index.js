let umaString = "um \"texto\""; //outra forma de inserir "" dentro de aspas
console.log(umaString);

//cada caracter teu um indice
//             01234567
//let teste = "um texto"

let testeIndice = "um texto"
console.log(testeIndice[4]);  //exibe e, se o indice selecionado for negativo ou um caracter inexistente retornará undefined 
console.log(testeIndice[-1]); //retorna undefined
console.log(testeIndice[8]);  //retorna undefined

//outro método de pegar o elemento da possição é com .charAt()

console.log(testeIndice.charAt(4));  //exibe e, se o indice selecionado for negativo ou um caracter inexistente retornará vazio
console.log(testeIndice.charAt(-1)); //""
console.log(testeIndice.charAt(8)); //""

//é possivel concatenar utilizando .concat()
console.log(testeIndice.concat(" em"," um", " lindo", " dia."));
//melhor utilizar template string
console.log(`${testeIndice} em um lindo dia.`);

//é possivel saber onde tal palavra começa utilizando .indexOf()
console.log(testeIndice.indexOf("texto"));
//caso não seja encontrado, retornará -1
console.log(testeIndice.indexOf("Texto"));
//é possivel dizer onde começará a busca
console.log(testeIndice.indexOf("o", 3));

//.lastIndexOf() faz o mesmo que .indexOf(), só que começando da direita para esquerda
console.log(testeIndice.lastIndexOf("m", 3));

//expressão regular
console.log(testeIndice.match(/[a-z]/));

//retorna um indice do que foi pedido
console.log(testeIndice.search(/[x]/));

//replace
console.log(testeIndice.replace("um", "outro")); //substitui uma palavra por outra
//pode ser feito com expressões regulares
console.log(testeIndice.replace(/m/g, "#")); //g faz para todos os indices 

console.log(testeIndice.length); //retorna o tamanho da string começando do 0

//.slice() "corta" a string
console.log(testeIndice.slice(4, 6)); //o indice 6 não será adicionado

//.split() divide uma string por um caractere especifico
console.log(testeIndice.split(" ")); 

console.log(testeIndice.toUpperCase());//deixa a string toda maiuscula

console.log(testeIndice.toLowerCase());//deixa a string toda minuscula