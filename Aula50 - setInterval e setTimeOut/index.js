function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {hour12: false})
}

console.log(mostraHora());

// setInterval() configura o intervalo de tempo para que determinada função seja executada em determidado tempo

const timer = setInterval(function () {
    console.log(mostraHora());
}, 1000); //passar a referencia e o tempo

//setTimeout() - igual ao setInterval() só que é executada só uma vez
setTimeout(function () {
    clearInterval(timer);
}, 3000); //vai parar com o timer de repetição a partir do tempo referenciado

setTimeout(() => {
    console.log('olá mundo!');
}, 5000);