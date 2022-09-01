const nome = "Gabriel";
const sobrenome = "Meira";
const idade = 20;
const peso = 115;
const alturaEmM = 1.80;
let indiceMassaCorporal;
let anoNascimento;

anoNascimento = 2022 - 20;
indiceMassaCorporal = peso/(alturaEmM * alturaEmM);

// console.log(nome, sobrenome, "tem", idade, "anos, pesa", peso, "kg");
// console.log("tem", alturaEmM, "de altura e seu indiceMassaCorporal é de", indiceMassaCorporal);
// console.log(nome, sobrenome, "nasceu em", anoNascimento, ".");

//concatenar com +
// console.log(nome + " " + sobrenome + " tem " + idade + " anos, pesa" + peso + "kg");
// console.log("tem " + alturaEmM + " de altura e seu indiceMassaCorporal é de " + indiceMassaCorporal);
// console.log(nome + " " + sobrenome + " nasceu em " + anoNascimento + ".");

//template string
console.log(`${nome} ${sobrenome} tem  ${idade} anos, pesa ${peso}kg`);
console.log(`tem ${alturaEmM} de altura e seu indiceMassaCorporal é de ${indiceMassaCorporal}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`);