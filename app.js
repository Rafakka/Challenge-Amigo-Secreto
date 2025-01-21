let listaDeAmigos = [];

function adicionarAmigo() {
    let campoTexto = document.getElementById('amigo');
    let amigoText = campoTexto.value.trim();

    if (amigoText === '') {
        alert('Por favor, insira um nome.');
        return;
    } else {
        listaDeAmigos.push(amigoText);

        campoTexto.value = '';

        let listaAmigosElement = document.getElementById('listaAmigos');
        let newListItem = document.createElement('li');
        newListItem.textContent = amigoText;
        listaAmigosElement.appendChild(newListItem);

        alert('Amigo adicionado: ' + amigoText);
    }
}

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert('A lista de amigos está vazia. Adicione amigos antes de sortear.');
        return;
    }

    let listaSorteadaEmbaralhada = listaDeAmigos
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
let winner = listaSorteadaEmbaralhada[0];

let resultadoElement = document.getElementById('resultado');
resultadoElement.innerHTML = ' ';

let winnerItem = document.createElement('li');
winnerItem.textContent = `O amigo sorteado é: ${winner}`;
winnerItem.style.fontWeight = 'bold';
resultadoElement.appendChild(winnerItem);

listaDeAmigos = [];
document.getElementById('listaAmigos').innerHTML = '';


    alert('Sorteio realizado com sucesso!');
}
