var escritura = document.querySelector("input");
var letras = ["a", "e", "i", "o", "u"];
var conversiones = ["ai", "enter", "imes", "ober", "ufat"];


function imprimir(frase){
    document.write(frase);
}

function encriptar(){
    for(var posicion = 0; posicion < 5; posicion++ ){
        if(escritura.value  == letras[posicion]){
           escritura = escritura.value.replace(letras[posicion], conversiones[posicion]);
        }
    }
     imprimir(escritura);
}
var button = document.querySelector("button");
button.onclick = encriptar;

//Ahora hay que encontrar la forma que haga push o cambie la letra en el string ya que solo me hace cambios si escribo la vocal en especifico


