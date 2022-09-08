//... rest, ... sprad
//indice         0     1     2     3     4     5     6     7     8
// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// // const [primeiroNumero, segundoNumero, terceiroNumero] = numeros;
// const [um, dois, tres, ...resto /*... recebe o resto do array */] = numeros;
// const [um, , tres, , cinco] = numeros; // , , pula valores
// console.log(um, tres, cinco);

//indice da lista          1          2         3
//indice dos elementos  0  1  2    0  1  2   0  1  2  
      const numeros = [[1, 2, 3], [4, 5, 6],[7, 8, 9]];

console.log(numeros[1][2]);
const [, [ , ,seis]] = numeros; //atribuiçãoo via desestruturação
console.log(seis); 