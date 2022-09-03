//São indexados por elementos
//                 0       1        2
const alunos = ['Luiz', 'Maria', 'João']; //lista
// console.log(alunos[0]); //retorna Luiz
// console.log(alunos[2]); //retorna João
// console.log(alunos.length); //verifica tamanho do array

// alunos[0] = 'Eduardo'; //editar posição do array
// alunos[3] = 'Luiza';  //adiciona uma posição no array
// alunos.unshift("Gustavo"); //adiciona uma posição no inicio array, sem precisar falar a posição
// alunos.push("Otávio"); //adiciona uma posição no fim array, sem precisar falar a posição
// alunos.shift();//remove o primeiro elemento do array
// alunos.pop();//remove o ultimo elemento do array
// delete alunos[1];//deleta o elemento selecionado, deixando o indice undefined
//console.log(alunos.slice(0, -1));//"fatia" elementos, deixando os elementos que estão no range
console.log(alunos instanceof Array); //verifica se é uma instancia de array

console.log(alunos);
