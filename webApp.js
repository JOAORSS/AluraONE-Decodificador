
const charEncript = {
    "a" : "ai",
    "e" : "enter",
    "i" : "imes",
    "o" : "ober",
    "u" : "ufat"
};

const charDecript = {
    "ai" : "a",
    "enter" : "e",
    "imes" : "i",
    "ober" : "o",
    "ufat" : "u"
};

function hiddenElements(){
    document.getElementById("decodificador-imagem").hidden = true;
    document.getElementById("decodificador-paragrafo").hidden = true;
    document.getElementById("decodificador-texto").hidden = true;
    document.getElementById("decodificador-copiar").removeAttribute("hidden");
    document.getElementById("decodificador-painel").removeAttribute("hidden");
    let editStyle = document.getElementById("descodificador").style;
    editStyle.justifyContent = "space-between";
    editStyle.paddingBottom = "3%";

}
 

function Criptografar(){

    hiddenElements();
    let textoDescrpit = document.getElementById("codificador-textarea").value;
    let Encriptado = textoDescrpit.replace(/[aeiou]/g, m => charEncript[m]);
    document.getElementById("decodificador-painel").innerHTML = Encriptado;

}

function Descriptografar(){

    hiddenElements();
    let textoEncript = document.getElementById("codificador-textarea").value;
    var Descriptado = textoEncript.replace(/ai|enter|imes|ober|ufat/g, function(m){ return charDecript[m]});
    document.getElementById("decodificador-painel").innerHTML = Descriptado;
    
}

function Copiar(){
    // Get the text field
  var textoCopiado = document.getElementById("decodificador-painel");

  // Select the text field
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(textoCopiado.value);

}