var escritura = document.querySelector("input");
var letras = ["a", "e", "i", "o", "u"];
var conversiones = ["ai", "enter", "imes", "ober", "ufat"];

function imprimir(frase){
    document.write(frase);
}

function convertir(){
    for(var posicion = 0; posicion < 5; posicion++ ){
        if(escritura.value == letras[posicion]){
            imprimir(conversiones[posicion]);
        }
    }
}
var button = document.querySelector("button");
button.onclick = convertir;

//Ahora hay que encontrar la forma que haga push o cambie la letra en el string ya que solo me hace cambios si escribo la vocal en especifico


