function listaDeTarefas () {
    const inputTarefa = document.querySelector('.input-tarefa');
    const btnTarefa = document.querySelector('.btn-tarefa');
    const tarefas = document.querySelector('.tarefas');

    document.addEventListener('click', function (e) {
        const el = e.target;

        if (el.classList.contains('apagar')) {
            el.parentElement.remove(); //remove o pai do elemento selecionado
            salvarTarefas();
        };
    });

    //keypress => pega o evento de pressionar tecla
    inputTarefa.addEventListener('keypress', function (e) {
        //quando pressionar a tecla, retornará um evento de tecla pressionada
        if (e.keyCode === 13) {
            if (!inputTarefa.value) return;
            criaTarefa(inputTarefa.value);
        };
    });

    btnTarefa.addEventListener('click', function () {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    });

    function criaTarefa(texto) {
        const li = criaLi();
        li.innerHTML = texto;
        tarefas.appendChild(li);
        limpaInput();
        criaBotaoApagar(li);
        salvarTarefas();
    };

    function limpaInput() {
        inputTarefa.value = ''; //limpa o input 
        inputTarefa.focus(); //irá por o cursor após criar uma tarefa
    };

    function criaLi() {
        return document.createElement('li');
    };

    function criaBotaoApagar(li) {
        li.innerText += ' ';
        const botaoApagar = document.createElement('button'); //criando botão
        botaoApagar.innerText = 'apagar';
        botaoApagar.setAttribute('class', 'apagar'); //Adiciona um novo atributo ou modifica o valor de um atributo existente num elemento específico
        botaoApagar.setAttribute('title', 'apagar esta tarefa'); //Adiciona um novo atributo ou modifica o valor de um atributo existente num elemento específico
        li.appendChild(botaoApagar); //adiciona o botão no li
    };

    function salvarTarefas() {
        const liTarefas = tarefas.querySelectorAll('li'); //pega todos os <li> da lista não ordenada
        const listaDeTarefas = [];

        for (let tarefa of liTarefas) {
            let tarefaTexto = tarefa.innerText.replace('apagar', '').trim(); //trim remove os espaços da direita e esquerda ex ' a' e 'a '
            listaDeTarefas.push(tarefaTexto);
        };

        const tarefasJson = JSON.stringify(listaDeTarefas); //converte valores em javascript para uma String JSON
        localStorage.setItem('tarefas', tarefasJson); //armazena dados(em string) no localStorage, estes dados não expiram 
    };

    function adicionaTarefasSalvas() {
        const tarefas = localStorage.getItem('tarefas');
        const tarefasArray = JSON.parse(tarefas); //converte json para objeto

        for (let tarefa of tarefasArray) {
            criaTarefa(tarefa);
        };
    };

    adicionaTarefasSalvas();
};

listaDeTarefas();