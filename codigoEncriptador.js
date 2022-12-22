var letra1 = "a";
var letra2 = "e";
var letra3 = "i";
var letra4 = "o";
var letra5 = "u";

var letras = prompt("escriba lo que quieras")
//Prompt me escribio todo
//Pensar en la logica de como se imprima solo lo que se escribe junto a la conversion de cada vocal

var conversion1 = "ai";
var conversion2 = "enter";
var conversion3 = "imes";
var conversion4 = "ober";
var conversion5 = "ufat";


function convertir (){
    if( letras == letra1){
        document.write(conversion1);
    } else if ( letras == letra2){
        document.write(conversion2);
    } else if( letras == letra3){
        document.write(conversion3);
    } else if(letras == letra4){
        document.write(conversion4);
    } else if( letras == letra5){
        document.write(conversion5);
    } else{

    }

 }
//posiblemente se requiera cambiar logica de la funcion
convertir();

