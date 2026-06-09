// =====================
// FUNÇÕES DE COOKIE
// =====================

const traducoes = {
    "pt-BR": {
        welcomeDefault: "Um site mais bonito com cookies inteligentes",
        welcomeBack: "Bem-vindo de volta, {name}!",
        heroCopy: "Salve preferências, personalize o tema e veja como os cookies podem deixar sua navegação mais rápida e confortável.",
        tituloNome: "1. Lembrar seu nome",
        tituloVisitas: "2. Contador de visitas",
        tituloTema: "3. Tema e layout",
        tituloIdioma: "4. Exemplo extra de cookie",
        placeholderNome: "Digite seu nome",
        btnSalvarNome: "Salvar Nome",
        btnClaro: "Claro",
        btnEscuro: "Escuro",
        btnLayoutEspacoso: "Layout Espaçoso",
        btnLayoutCompacto: "Layout Compacto",
        btnSalvarIdioma: "Salvar idioma",
        cookieTitle: "Uso de cookies",
        cookieText: "Os cookies ajudam a lembrar suas escolhas, manter seu tema e melhorar sua experiência. Aceite para continuar usando o site com mais conforto.",
        btnAceitarCookies: "Aceitar cookies",
        footerText: "As preferências salvas aqui são mantidas por cookies e reaplicadas sempre que você voltar.",
        visitCount: "Você já visitou este site {count} vez(es).",
        layoutSaved: "Layout salvo: {value}.",
        idiomaSaved: "Idioma salvo: {value}."
    },
    "en-US": {
        welcomeDefault: "A nicer site with smart cookies",
        welcomeBack: "Welcome back, {name}!",
        heroCopy: "Save preferences, customize the theme, and see how cookies make browsing faster and more comfortable.",
        tituloNome: "1. Remember your name",
        tituloVisitas: "2. Visit counter",
        tituloTema: "3. Theme and layout",
        tituloIdioma: "4. Extra cookie example",
        placeholderNome: "Type your name",
        btnSalvarNome: "Save name",
        btnClaro: "Light",
        btnEscuro: "Dark",
        btnLayoutEspacoso: "Spacious layout",
        btnLayoutCompacto: "Compact layout",
        btnSalvarIdioma: "Save language",
        cookieTitle: "Cookie use",
        cookieText: "Cookies help remember your choices, keep your theme, and improve your experience. Accept to continue using the site more comfortably.",
        btnAceitarCookies: "Accept cookies",
        footerText: "Preferences saved here are kept by cookies and reapplied whenever you return.",
        visitCount: "You have visited this site {count} time(s).",
        layoutSaved: "Saved layout: {value}.",
        idiomaSaved: "Language saved: {value}."
    },
    "es-ES": {
        welcomeDefault: "Un sitio más bonito con cookies inteligentes",
        welcomeBack: "¡Bienvenido de nuevo, {name}!",
        heroCopy: "Guarda preferencias, personaliza el tema y ve cómo las cookies hacen la navegación más rápida y cómoda.",
        tituloNome: "1. Recordar tu nombre",
        tituloVisitas: "2. Contador de visitas",
        tituloTema: "3. Tema y diseño",
        tituloIdioma: "4. Ejemplo extra de cookie",
        placeholderNome: "Escribe tu nombre",
        btnSalvarNome: "Guardar nombre",
        btnClaro: "Claro",
        btnEscuro: "Oscuro",
        btnLayoutEspacoso: "Diseño espacioso",
        btnLayoutCompacto: "Diseño compacto",
        btnSalvarIdioma: "Guardar idioma",
        cookieTitle: "Uso de cookies",
        cookieText: "Las cookies ayudan a recordar tus elecciones, mantener tu tema y mejorar tu experiencia. Acepta para seguir usando el sitio con más comodidad.",
        btnAceitarCookies: "Aceptar cookies",
        footerText: "Las preferencias guardadas aquí se conservan con cookies y se aplican cuando vuelves.",
        visitCount: "Has visitado este sitio {count} vez(es).",
        layoutSaved: "Diseño guardado: {value}.",
        idiomaSaved: "Idioma guardado: {value}."
    }
};

let idiomaAtual = "pt-BR";

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

function aplicarIdioma(idioma) {
    const texto = traducoes[idioma] || traducoes["pt-BR"];
    idiomaAtual = idioma;
    document.documentElement.lang = idioma;

    const usuario = getCookie("usuario");
    const boasVindas = usuario
        ? texto.welcomeBack.replace("{name}", usuario)
        : texto.welcomeDefault;

    document.getElementById("boasVindas").textContent = boasVindas;
    document.getElementById("heroCopy").textContent = texto.heroCopy;
    document.getElementById("tituloNome").textContent = texto.tituloNome;
    document.getElementById("tituloVisitas").textContent = texto.tituloVisitas;
    document.getElementById("tituloTema").textContent = texto.tituloTema;
    document.getElementById("tituloIdioma").textContent = texto.tituloIdioma;
    document.getElementById("nome").placeholder = texto.placeholderNome;
    document.getElementById("btnSalvarNome").textContent = texto.btnSalvarNome;
    document.getElementById("btnClaro").textContent = texto.btnClaro;
    document.getElementById("btnEscuro").textContent = texto.btnEscuro;
    document.getElementById("btnClaro2").textContent = texto.btnClaro;
    document.getElementById("btnEscuro2").textContent = texto.btnEscuro;
    document.getElementById("btnLayoutEspacoso").textContent = texto.btnLayoutEspacoso;
    document.getElementById("btnLayoutCompacto").textContent = texto.btnLayoutCompacto;
    document.getElementById("btnSalvarIdioma").textContent = texto.btnSalvarIdioma;
    document.getElementById("cookieTitle").textContent = texto.cookieTitle;
    document.getElementById("cookieText").textContent = texto.cookieText;
    document.getElementById("btnAceitarCookies").textContent = texto.btnAceitarCookies;
    document.getElementById("footerText").textContent = texto.footerText;

    const idiomaSelecionado = document.getElementById("idioma");
    if (idiomaSelecionado) {
        idiomaSelecionado.value = idioma;
    }

    const layout = getCookie("layout");
    if (layout) {
        document.getElementById("dadosLayout").textContent = texto.layoutSaved.replace("{value}", layout);
    }

    const idiomaSalvo = getCookie("idioma");
    if (idiomaSalvo) {
        document.getElementById("dadosIdioma").textContent = texto.idiomaSaved.replace("{value}", idiomaSalvo);
    }

    atualizarVisitas();
}

function salvarNome() {
    const nome = document.getElementById("nome").value;
    if (nome) {
        setCookie("usuario", nome, 7);
        const texto = traducoes[idiomaAtual] || traducoes["pt-BR"];
        document.getElementById("boasVindas").textContent = texto.welcomeBack.replace("{name}", nome);
    }
}

function trocarTema(tema) {
    document.body.className = tema;
    setCookie("tema", tema, 30);
}

function alterarLayout(layout) {
    document.body.dataset.layout = layout;
    setCookie("layout", layout, 30);
    const texto = traducoes[idiomaAtual] || traducoes["pt-BR"];
    document.getElementById("dadosLayout").textContent = texto.layoutSaved.replace("{value}", layout);
}

function salvarIdioma() {
    const idioma = document.getElementById("idioma").value;
    if (idioma) {
        setCookie("idioma", idioma, 30);
        const texto = traducoes[idioma] || traducoes["pt-BR"];
        document.getElementById("dadosIdioma").textContent = texto.idiomaSaved.replace("{value}", idioma);
        aplicarIdioma(idioma);
    }
}

function aceitarCookies() {
    setCookie("cookiesAceitos", "sim", 365);
    document.getElementById("cookieBanner").style.display = "none";
}

function atualizarVisitas() {
    let visitas = getCookie("visitas");
    if (visitas === "") {
        visitas = 1;
    } else {
        visitas = parseInt(visitas, 10) + 1;
    }
    setCookie("visitas", visitas, 30);
    const texto = traducoes[idiomaAtual] || traducoes["pt-BR"];
    document.getElementById("visitas").textContent = texto.visitCount.replace("{count}", visitas);
}

window.onload = function () {
    const tema = getCookie("tema");
    if (tema) {
        document.body.className = tema;
    } else {
        document.body.className = "claro";
    }

    const layout = getCookie("layout");
    if (layout) {
        document.body.dataset.layout = layout;
    }

    const idioma = getCookie("idioma");
    if (idioma) {
        idiomaAtual = idioma;
    }

    aplicarIdioma(idiomaAtual);

    const aceitou = getCookie("cookiesAceitos");
    if (aceitou === "sim") {
        document.getElementById("cookieBanner").style.display = "none";
    }
};
