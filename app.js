let listaSorteados = [];
let numLimite = 10;
let NumeroSecreto = gerarNumeroAlet();
let tentativas = 1;

function exibirTextoNaTela(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
}

function exibirMensagemInicial () {
    exibirTextoNaTela('h1','Jogo do número secreto.');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10.');
}
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == NumeroSecreto) {
    exibirTextoNaTela('h1','Acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativas.';
    let mensagemAcerto = `Você descobriu o número secreto em ${tentativas} ${palavraTentativa}.`;
    exibirTextoNaTela('p',mensagemAcerto);
    document.getElementById ('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > NumeroSecreto){
            exibirTextoNaTela('p',`O número secreto é menor que ${chute}.`);
        } else {
            exibirTextoNaTela('p',`O número é maior que ${chute}.`);
            
        }
        tentativas++;
        limparCampo();
    }
}
function gerarNumeroAlet() {
    let numeroEscolhido = parseInt(Math.random()*numLimite + 1);
    let quantidadeNumerosLista = listaSorteados.length;
    if (quantidadeNumerosLista == numLimite) {
        listaSorteados = [];
    }
    if (listaSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAlet();
    } else {
        listaSorteados.push(numeroEscolhido);
        console.log(listaSorteados);
        return numeroEscolhido;
    }
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo() {
    NumeroSecreto = gerarNumeroAlet();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}