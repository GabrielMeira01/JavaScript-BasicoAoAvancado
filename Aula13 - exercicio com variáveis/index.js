let varA = "A";
let varB = "B";
let varC = "C";

// const varATemp = varA; //solução com variável temp
// varA = varB;
// varB = varC;
// varC = varATemp;

// console.log(varA, varB, varC)

[varA, varB, varC] = [varB, varC, varA] //solução com array 
console.log(varA, varB, varC)