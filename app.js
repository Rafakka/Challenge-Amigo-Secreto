let listaDeAmigos = [];

function adicionarAmigo(){
    let campoTexto = document.getElementById('amigo');
    let amigoText = campoTexto.value.trim();

    if (amigoText === ''){
        alert('Por favor, insira um nome.');
        return;
    } else {
        listaDeAmigos.push(amigoText);
        campoTexto.value = '';
        alert('Amigo adicionado: ' + amigoText);
}
    }

function sortearAmigos (){
    let listaSorteada = listaDeAmigos.slice();
    let listaSorteadaEmbaralhada = [];

    while (listaSorteada.length > 0){
        let indiceSorteado = Math.floor(Math.random() * listaSorteada.length);
        let amigoSorteado = listaSorteada.splice(indiceSorteado, 1);
        listaSorteadaEmbaralhada.push(amigoSorteado);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = listaSorteadaEmbaralhada.join(', ');
}

