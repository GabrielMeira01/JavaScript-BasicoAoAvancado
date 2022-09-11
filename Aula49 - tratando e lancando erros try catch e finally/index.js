// try {
//     //executada quando não há erros
//     // console.log(a);
//     console.log('Abri um arquivo');
//     console.log('Manipulei o arquivo e gerou erro');
//     console.log('Fechei o arquivo')

//     try {
//         console.log(b);
//         console.log('Abri outro arquivo');
//     } catch (e) {
//         console.log('deu erro');
//     }
// } catch (e) {
//     //executada quando há erros
//     console.log('tratando o erro');
// } finally {
//     //sempre executado
//     console.log('finally: Fechei o arquivo');
// }

function retornaHora (data) {
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando instância de Date');
    };

    if (!data) {
        data = new Date()
    };

    return data.toLocaleString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
};

try {
    const data = new Date('01-01-1970 12:58:12')
    const hora = retornaHora(a);
    console.log(hora);
} catch (e) {
    //tratar erro
    console.log('Erro, por favor tente novamente mais tarde.')
} finally {
    console.log('tenha um bom dia.');
}