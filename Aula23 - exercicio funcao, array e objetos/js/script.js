function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];

    function recebeEventoForm (evento) {
        evento.preventDefault();
        
        const nome = document.querySelector('.nome').value;
        const sobrenome = document.querySelector('.sobrenome').value;
        const peso = document.querySelector('.peso').value;
        const altura = document.querySelector('.altura').value;
        
        const pessoa = {
            nome,
            sobrenome,
            peso,
            altura
        };

        pessoas.push(pessoa);
        console.log(pessoas);
        resultado.innerHTML += `
        <p>
            ${pessoa.nome}, 
            ${pessoa.sobrenome},
            ${pessoa.peso},
            ${pessoa.altura}
        </p>
        </br>`;
    };
    
    form.addEventListener('submit', recebeEventoForm);

};

meuEscopo();