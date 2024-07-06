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

function hiddenElements() {
    document.getElementById("decodificador-imagem").hidden = true;
    document.getElementById("decodificador-paragrafo").hidden = true;
    document.getElementById("decodificador-texto").hidden = true;
    document.getElementById("decodificador-copiar").removeAttribute("hidden");
    document.getElementById("decodificador-painel").removeAttribute("hidden");
    let editStyle = document.getElementById("descodificador").style;
    editStyle.justifyContent = "space-evenly";


};


function Criptografar() {

    hiddenElements();
    let textoDescrpit = document.getElementById("codificador-textarea").value;
    let Encriptado = textoDescrpit.replace(/[aeiou]/g, m => charEncript[m]);
    document.getElementById("decodificador-painel").innerHTML = Encriptado;

};

function Descriptografar() {

    hiddenElements();
    let textoEncript = document.getElementById("codificador-textarea").value;
    var Descriptado = textoEncript.replace(/ai|enter|imes|ober|ufat/g, function (m) {
        return charDecript[m]
    });
    document.getElementById("decodificador-painel").innerHTML = Descriptado;

};

function Copiar() {
    var textoCopiado = document.getElementById("decodificador-painel");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(textoCopiado.value);

};

if (window.matchMedia("(min-width:1270px)").matches){

    document.getElementById("decodificador-imagem").hidden = true;
}