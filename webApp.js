
    // Chaves para criptografar e descriptografar //

const charEncript = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat"
};

const charDecript = {
    "ai": "a",
    "enter": "e",
    "imes": "i",
    "ober": "o",
    "ufat": "u"
};

    // Função para mudar os elementos ao clicar nos botões "Criptografar" e "Descriptografar" //

function hiddenElements() {
    document.getElementById("decodificador-imagem").hidden = true;
    document.getElementById("decodificador-paragrafo").hidden = true;
    document.getElementById("decodificador-texto").hidden = true;
    document.getElementById("decodificador-copiar").removeAttribute("hidden");
    document.getElementById("decodificador-painel").removeAttribute("hidden");
    let editStyle = document.getElementById("descodificador").style;
    editStyle.justifyContent = "space-evenly";
};

    // Funcão para validar se o texto que o script irá trabalhar não a acentos ou maiúsculas //

function testeValido(textoAvaliar) {
    let testeMaiusculas = textoAvaliar.match(/[A-Z]/g);
    let testeAcento = textoAvaliar.match(/[\u00C0-\u00FF]/g);
    let testeReal = testeMaiusculas + testeAcento;
    return testeReal
};

    // Função para criptografar o texto dentro da primeira textarea //

function Criptografar() {

    hiddenElements();
    let textoDescrpit = document.getElementById("codificador-textarea").value;
    let testeRealEncrip = testeValido(textoDescrpit)
    if (testeRealEncrip) {
        document.getElementById("decodificador-painel").innerHTML = "";
    } else {
        let Encriptado = textoDescrpit.replace(/[aeiou]/g, m => charEncript[m]);
        document.getElementById("decodificador-painel").innerHTML = Encriptado;
    }
};

    // Função para descriptografar o texto dentro da primeira textarea //

function Descriptografar() {

    hiddenElements();
    let textoEncript = document.getElementById("codificador-textarea").value;
    let testeRealDecrip = testeValido(textoEncript);

    if (testeRealDecrip) {
        document.getElementById("decodificador-painel").innerHTML = "";
    } else {
        var Descriptado = textoEncript.replace(/ai|enter|imes|ober|ufat/g, function (m) {return charDecript[m]});
        document.getElementById("decodificador-painel").innerHTML = Descriptado;
    }
};

    // Função para copiar o texto dentro da segunda textarea (criptografado ou não) //

function Copiar() {
    var textoCopiado = document.getElementById("decodificador-painel");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(textoCopiado.value);
};