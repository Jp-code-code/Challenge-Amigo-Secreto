let amigos = [];

function adicionarAmigo() {
    let nomeAmigo = document.getElementById("amigo").value.trim();
    
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
        return;
    }
    amigos.push(nomeAmigo);
    document.getElementById("amigo").value = "";
    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    })
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione um nome para sortear!");
        return;
    }
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];
    mostrarResultado(amigoSorteado);
}

function mostrarResultado(amigoSorteado) {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    let li = document.createElement("li");
    li.textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;
    resultado.appendChild(li);
}