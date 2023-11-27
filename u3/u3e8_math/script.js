var cadena = prompt("Introduce tu nombre y apellidos:");

function lengthSinEspacios(cadena) {
    cadena = cadena.replaceAll(" ", "");
    return cadena.length;
}

function enSaltos(cadena) {
    cadena = cadena.replaceAll(" ", "<br>");
    return cadena;
}

function prop1(cadena) {
    cadena = cadena.toLowerCase();
    array = cadena.split(" ");
    userName = "";
    for (let i = 0; i <= 2; i++) {
        switch (i) {
            case 0:
                userName += array[i].charAt(0);
                break;
        
            case 1:
                userName += array[i];
                break;
        
            case 2:
                userName += array[i].charAt(0);
                break;
        
            default:
                break;
        }
    }
    return userName;
}

function prop2(cadena) {
    cadena = cadena.toLowerCase();
    array = cadena.split(" ");
    userName = "";
    for (let i = 0; i <= 2; i++) {
        for (let x = 0; x <= 2; x++) {
            userName += array[i].charAt(x);
        }
    }
    return userName;
}


contenedor = document.getElementById("contenedor");

contenedor.innerHTML += "<b>El tamaño del nombre mas los apellidos(sin contar espacios) = </b>" + lengthSinEspacios(cadena) + "<br>";
contenedor.innerHTML += "<b>En mayusculas = </b>" + cadena.toUpperCase() + "<br>";
contenedor.innerHTML += "<b>EN minusculas = </b>" + cadena.toLowerCase() + "<br>";
contenedor.innerHTML += "<b>Con saltos de linea = </b>" + enSaltos(cadena) + "<br>";
contenedor.innerHTML += "<b>Propuesta nombre de usuario 1 = </b>" + prop1(cadena) + "<br>";
contenedor.innerHTML += "<b>Propuesta nombre de usuario 2 = </b>" + prop2(cadena) + "<br>";