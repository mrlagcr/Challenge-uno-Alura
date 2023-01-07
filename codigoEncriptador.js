
var letras = ["a", "e", "i", "o", "u"];
var conversiones = ["ai", "enter", "imes", "ober", "ufat"];

function encriptar(){
    var escritura = document.querySelector(".input-entrada").value;
    var escrituraEncriptada = escritura.replace(/e/img, conversiones[1]).replace(/i/img, conversiones[2]).replace(/o/img, conversiones[3]).replace(/a/img, conversiones[0]).replace(/u/img, conversiones[4]);
    for (var posicion = 0; posicion < 5; posicion++){
       if(escritura = conversiones[posicion]){
            document.querySelector(".text-salida").value = escrituraEncriptada;
            break;
       } 
        
    }
    
}

var button = document.querySelector(".boton-encriptado");
button.onclick = encriptar;

function desencriptar(){
    var escritura = document.querySelector(".input-entrada").value;
    var escrituraEncriptada = escritura.replace(/enter/img, letras[1]).replace(/imes/img, letras[2]).replace(/ober/img, letras[3]).replace(/ai/img, letras[0]).replace(/ufat/img, letras[4]);
    for (var posicion = 0; posicion < 5; posicion++){
       if(letras[posicion] = escritura){
            document.querySelector(".text-salida").value = escrituraEncriptada;       
            break;
       } 
        
    }
    
}

var button = document.querySelector(".boton-desencriptado");
button.onclick = desencriptar;

function copiar(){
    var copiarTexto = document.querySelector(".text-salida").value;
    navigator.clipboard.writeText(copiarTexto);
}


var button = document.querySelector(".boton-copiar")
button.onclick = copiar;

 //haciendo pull
//Ahora hay que encontrar la forma que haga push o cambie la letra en el string ya que solo me hace cambios si escribo la vocal en especifico


