// =====================
// FUNÇÕES DE COOKIE
// =====================

function setCookie(nome, valor, dias) {
    const data = new Date();
    data.setTime(data.getTime() + dias * 24 * 60 * 60 * 1000);
    document.cookie = `${nome}=${valor};expires=${data.toUTCString()};path=/`;
}

function getCookie(nome) {
    const nomeCookie = `${nome}=`;
    const cookies = document.cookie.split(";");

    for (let cookie of cookies) {
        cookie = cookie.trim();

        if (cookie.indexOf(nomeCookie) === 0) {
            return cookie.substring(nomeCookie.length);
        }
    }

    return "";
}

// =====================
// NOME
// =====================

function salvarNome() {
    const nome = document.getElementById("nome").value;

    if (nome) {
        setCookie("usuario", nome, 7);
        document.getElementById("boasVindas").textContent =
            `Bem-vindo de volta, ${nome}!`;
    }
}

// =====================
// TEMA E LAYOUT
// =====================

function trocarTema(tema) {
    document.body.className = tema;
    setCookie("tema", tema, 30);
}

function alterarLayout(layout) {
    document.body.dataset.layout = layout;
    setCookie("layout", layout, 30);
    document.getElementById("dadosLayout").textContent =
        `Layout salvo: ${layout}.`;
}

function salvarIdioma() {
    const idioma = document.getElementById("idioma").value;

    if (idioma) {
        setCookie("idioma", idioma, 30);
        document.getElementById("dadosIdioma").textContent =
            `Idioma salvo: ${idioma}.`;
    }
}

// =====================
// BANNER DE COOKIES
// =====================

function aceitarCookies() {
    setCookie("cookiesAceitos", "sim", 365);
    document.getElementById("cookieBanner").style.display = "none";
}

// =====================
// VISITAS
// =====================

function atualizarVisitas() {
    let visitas = getCookie("visitas");

    if (visitas === "") {
        visitas = 1;
    } else {
        visitas = parseInt(visitas, 10) + 1;
    }

    setCookie("visitas", visitas, 30);
    document.getElementById("visitas").textContent =
        `Você já visitou este site ${visitas} vez(es).`;
}

// =====================
// INICIALIZAÇÃO
// =====================

window.onload = function () {
    const usuario = getCookie("usuario");

    if (usuario) {
        document.getElementById("boasVindas").textContent =
            `Bem-vindo de volta, ${usuario}!`;
    }

    const tema = getCookie("tema");
    if (tema) {
        document.body.className = tema;
    } else {
        document.body.className = "claro";
    }

    const layout = getCookie("layout");
    if (layout) {
        document.body.dataset.layout = layout;
        document.getElementById("dadosLayout").textContent =
            `Layout salvo: ${layout}.`;
    }

    const idioma = getCookie("idioma");
    if (idioma) {
        document.getElementById("idioma").value = idioma;
        document.getElementById("dadosIdioma").textContent =
            `Idioma salvo: ${idioma}.`;
    }

    const aceitou = getCookie("cookiesAceitos");
    if (aceitou === "sim") {
        document.getElementById("cookieBanner").style.display = "none";
    }

    atualizarVisitas();
};
