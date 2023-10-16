// Creamos la variable edad para almacenar su es Niño, Joven...
var Edad = "";
// Almacena la edad que ha introducido el usuario
var Respuesta = prompt("¿Que edad tines?");
// En caso de que la edad sea menor a 0 no es valido si es mayor te dice que eres
if (Respuesta > 0) {
    if (Respuesta <= 12) {
        Edad = "Niño";
    }
    if (Respuesta >= 13 && Respuesta <= 26) {
        Edad = "Joven";
    }
    if (Respuesta >= 27 && Respuesta <= 60) {
        Edad = "Adulto";
    }
    if (Respuesta >= 60) {
        Edad = "Jubilado";
    }
}else{
    alert("Tu edad no puede ser menor que 0");
}

// Introducimos el resultado en el html
document.body.innerHTML = "Eres un " + Edad;