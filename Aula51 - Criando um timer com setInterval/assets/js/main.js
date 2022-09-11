function relogio() {
    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;

    function iniciaRelogio() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerText = criaHoraDosSegundos(segundos);
        }, 1000)
    };

    function criaHoraDosSegundos(segundos) {
        let hora = new Date(segundos * 1000);
        return hora.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    };

    function alteraCorRelogio(cor) {
        relogio.style.color = cor;
    };

    document.addEventListener('click', function (e) {
        const el = e.target;
        if (el.classList.contains('iniciar')) {
            alteraCorRelogio('black');
            iniciaRelogio();

        };

        if (el.classList.contains('pausar')) {
            alteraCorRelogio('red');
            clearInterval(timer);
        };

        if (el.classList.contains('zerar')) {
            alteraCorRelogio('black');
            clearInterval(timer);
            segundos = 0;
            relogio.innerText = '00:00:00'
        };
    });
};

relogio();