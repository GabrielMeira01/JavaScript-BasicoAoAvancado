/*
 * Primitivos - string, number, boolean, undefined, null, bigint, symbol
 * tipos primitivos são imutaveis
 * copiados
*/

let a = 1;
let b = a; //copia o valor
console.log(a, b);

/*
 * Referência - array, object, function
 * passado por referência
*/

let c = [1, 2, 3]
let d = c; //aponta para o mesmo lugar na memória
let e = [...c] //cria um sprad que copia o valor de c em um novo local da memória
console.log(c, d);
