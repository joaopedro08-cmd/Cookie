// Cria um cookie
function setCookie(nome, valor, dias) {
    const data = new Date();
    data.setTime(data.getTime() + (dias * 24 * 60 * 60 * 1000));

    document.cookie = `${nome}=${valor}; expires=${data.toUTCString()}; path=/`;
}

// Lê um cookie
function getCookie(nome) {
    const nomeCookie = nome + "=";
    const cookies = document.cookie.split(";");

    for (let cookie of cookies) {
        cookie = cookie.trim();

        if (cookie.indexOf(nomeCookie) === 0) {
            return cookie.substring(nomeCookie.length);
        }
    }

    return "";
}

// Salva o nome digitado
function salvarNome() {
    const nome = document.getElementById("nome").value;

    if (nome) {
        setCookie("usuario", nome, 7);
        document.getElementById("mensagem").textContent =
            `Bem-vindo de volta, ${nome}!`;
    }
}

// Verifica se já existe um cookie ao abrir a página
window.onload = function() {
    const usuario = getCookie("usuario");

    if (usuario) {
        document.getElementById("mensagem").textContent =
            `Bem-vindo de volta, ${usuario}!`;
    }
};