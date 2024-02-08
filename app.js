var botonEncriptar=document.querySelector(".boton-encriptar");
var botonDesencriptar=document.querySelector(".boton-desencriptar");
var munieco=document.querySelector(".container-imagen-lupa");
var textoLupa=document.querySelector(".container-texto-lupa");
var resultado=document.querySelector(".texto-digitado");
var ocultarBoton=document.querySelector(".ocultar-boton")
var mostrarTextArea=document.querySelector(".ocultar")
var cajaTexto= document.querySelector(".texto");

botonEncriptar.onclick=encriptar;
botonDesencriptar.onclick=desencriptar;
ocultarBoton.onclick=copiar;


function encriptar(){
    
    var cajaTexto= recuperarTexto();
    if(!validar(cajaTexto)){
        alert("Texto invalido, verifique su texto.")
        return;
    }else{
    if(cajaTexto.length==0)
        {
            alert("el cuadro de texto esta vacio");
        }else{
            ocultarAdelante();
            mostrarboton();
            resultado.textContent=encriptarTexto(cajaTexto);
            document.querySelector(".boton-desencriptar").removeAttribute('disabled');
        }}
    
}
function desencriptar(){
    ocultarAdelante();
    mostrarboton();
    var cajaTexto= recuperarTexto();
    resultado.textContent=desencriptarTexto(cajaTexto)
}
function validar(textoValidar){
    const letras = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z","Á","É","Í","Ó","Ú","á","é","í","ó","ú"];
    var conteo = 0;

    for(var posicion = 0; posicion < textoValidar.length; posicion++){
        for(var letra = 0; letra < letras.length;letra++){
            if(textoValidar.charAt(posicion) == letras[letra]){
                conteo++;
            }
        }
    }
    if(conteo == 0){
        return true;
    }
    return false;
}
function recuperarTexto(){
    var cajaTexto= document.querySelector(".texto");
    return cajaTexto.value;
}
function ocultarAdelante(){
    munieco.classList.add("ocultar");
    textoLupa.classList.add("ocultar");
}
function mostrarboton(){
    ocultarBoton.classList.remove("ocultar-boton");
    mostrarTextArea.classList.remove("ocultar")
}
function encriptarTexto(){
    var texto = cajaTexto.value;
    var textoFinal = "";

    
    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    cajaTexto.value="";
    return textoFinal;

    
}
function desencriptarTexto(){
    var texto = cajaTexto.value;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }
    
    return textoFinal;

}

function copiar(){
    var copia =resultado.value;
    navigator.clipboard.writeText(copia);

    var anuncio = document.querySelector(".boton-copiar");
    setTimeout(() => {
        munieco.classList.remove("ocultar")
        textoLupa.classList.remove("ocultar");
        ocultarBoton.classList.add("ocultar-boton");
        mostrarTextArea.classList.add("ocultar")
    }, 950);
}

