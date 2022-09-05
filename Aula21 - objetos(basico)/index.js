// const pessoa = { //criando objeto literal
//     nome: "Luiz",
//     sobrenome: "Miranda",
//     idade: 25
// };

// console.log(pessoa.nome);
// console.log(pessoa.sobrenome);
// console.log(pessoa.idade);

// function criaPessoa(nome, sobrenome, idade){
//     return{ nome, sobrenome, idade };
// };

// const pessoa = criaPessoa("Luiz", "Miranda", 25);
//argumento é o valor passado para o parametro
// console.log(pessoa);

const pessoa = {
    nome: "Luiz",
    sobrenome: "Miranda",
    idade: 25,

    fala(){ //método
        console.log(`A minha idade atual é ${this.idade}`);
        //this. = este contesto
    },

    incrementaIdade(){ //método
        this.idade++;
    },
};

pessoa.fala();
pessoa.incrementaIdade(); //soma 1 na idade 
pessoa.fala();