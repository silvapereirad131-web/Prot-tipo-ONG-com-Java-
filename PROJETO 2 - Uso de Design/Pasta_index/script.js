function exibirProjetoSelecionado() {
    const params = new URLSearchParams(window.location.search);
    const projeto = params.get("projeto");
    const elemento = document.getElementById("projeto");

    if (elemento && projeto) {
        elemento.textContent = "Projeto escolhido: " + projeto;
    }
}

function finalizarDoacao(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const valor = document.getElementById("valor").value;
    const mensagem = document.getElementById("mensagem");

    if (mensagem) {
        mensagem.textContent = "Obrigado, senhor(a) " + nome + "! Sua doação de R$ " + valor + " foi registrada! >:D";
        mensagem.style.color = "#176b45";
    }

    localStorage.setItem("nomeDoacao", nome);
    localStorage.setItem("valorDoacao", valor);
    window.location.href = "obrigado.html";
}

function carregarMensagemObrigado() {
    const nome = localStorage.getItem("nomeDoacao") || "Amigo";
    const valor = localStorage.getItem("valorDoacao") || "0";
    const elemento = document.getElementById("mensagem-obrigado");

    if (elemento) {
        elemento.textContent = "Obrigado, senhor(a) " + nome + "! Sua doação de R$ " + valor + " foi registrada! >:D";
    }
}

if (document.getElementById("projeto")) {
    exibirProjetoSelecionado();
}

if (document.getElementById("mensagem-obrigado")) {
    carregarMensagemObrigado();
}