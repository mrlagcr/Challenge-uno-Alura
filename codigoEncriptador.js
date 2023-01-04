
var letras = ["a", "e", "i", "o", "u"];
var conversiones = ["ai", "enter", "imes", "ober", "ufat"];

function encriptar(){
    var escritura = document.querySelector(".input-entrada").value;
    var escrituraEncriptada = escritura.replace(letras[1], conversiones[1]).replace(letras[2], conversiones[2]).replace(letras[3], conversiones[3]).replace(letras[0], conversiones[0]).replace(letras[4], conversiones[4]);
    for (var posicion = 0; posicion < 5; posicion++){
       if(letras[posicion] = conversiones[posicion]){
            document.querySelector(".text-salida").value = escrituraEncriptada;
            break;
       } 
        
    }
    
}

var button = document.querySelector(".buton-entrada");
button.onclick = encriptar;

function desencriptar(){
    var escritura = document.querySelector(".input-entrada").value;
    var escrituraEncriptada = escritura.replace(conversiones[0], letras[0]).replace(conversiones[1], letras[1]).replace(conversiones[2], letras[2]).replace(conversiones[3], letras[3]).replace(conversiones[4], letras[4]);
    for (var posicion = 0; posicion < 5; posicion++){
       if(conversiones[posicion] = letras[posicion]){
            document.querySelector(".text-salida").value = escrituraEncriptada;       
            break;
       } 
        
    }
    
}

var button = document.querySelector(".buton-salida");
button.onclick = desencriptar;
 //haciendo pull
//Ahora hay que encontrar la forma que haga push o cambie la letra en el string ya que solo me hace cambios si escribo la vocal en especifico


