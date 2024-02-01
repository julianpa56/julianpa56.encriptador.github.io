

function encriptar () {
    
    /*
    La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "a" es convertida para "ai"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"
    */

    let texto = document.getElementById("texto").value
    let textoCodificado

    if( texto == null || texto.length == 0 ) return;
    else{
        textoCodificado = texto.replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    }

    mostrarResultado(textoCodificado)
}

function desencriptar () {

    let texto = document.getElementById("texto").value
    let textoDecodificado

    if( texto == null || texto.length == 0 ) return;
    else{
        textoDecodificado = texto.replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    }

    mostrarResultado(textoDecodificado)
}

function mostrarResultado ( resultado ) {
    
    let textoVacio = document.getElementsByClassName("texto-vacio")[0];
    textoVacio.classList.add('ocultar')

    let textoResultado = document.getElementsByClassName("texto-resultado")[0];
    textoResultado.classList.remove("ocultar");

    let mostrar = document.getElementsByClassName("resultado")[0];
    mostrar.textContent = resultado;
}

function copiarAlPortapapeles () {
    let textoACopiar = document.getElementsByClassName("resultado")[0].innerHTML;

    if ( textoACopiar ) {
        navigator.clipboard.writeText(textoACopiar)
        .then(() => {
            console.log('Texto copiado al portapapeles');
        })
        .catch(err => {
            console.error('Error al copiar al portapapeles: ', err);
        });
    }
}
