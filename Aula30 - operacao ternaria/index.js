//(Condição) ? 'valor para verdadeiro' : 'valor para falso';
const pontuacaoUsuario = 1000;
const verificaUsuarioVip = pontuacaoUsuario >= 1000 ? "Usuário VIP" : "Usuário normal";

const corUsuario = null;
const corPadrao = corUsuario || "Preto";

console.log(verificaUsuarioVip, corPadrao);