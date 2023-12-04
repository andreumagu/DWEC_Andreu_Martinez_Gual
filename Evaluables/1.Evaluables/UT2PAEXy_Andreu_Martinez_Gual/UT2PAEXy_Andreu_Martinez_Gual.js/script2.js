function comprobar(params) {
    // Guardamos en la cadena de texto en una variable
    var text = document.getElementById("cadena").value;
    // La concertimos a mayusculas
    var texto = text.toUpperCase();
    // Variable para manipular
    var cadena = texto;

    // Contadores de los patrones
    var cont00 = 0;
    var cont101 = 0;
    var contABC = 0;
    var contHO = 0;

    // Mientras flag sea true
    var flag = true;
    while(flag){
        if (cadena.includes("00")) { // Si la cadena incluye este cadena
            cont00++; // El contador aumenta en uno
            var x = cadena.search("00"); // Almacenamos la posicion del inicio de la cadena
            cadena = cadena.slice(x+1); // Realizamos una subcadena a partir de x mas uno, para no repetir el mismo patron.
        }else{ // Si no hay mas coincidencia del patron
            flag = false;
        }
    }

    var cadena = texto; // Igualamos cadeno a texto para obtener el String entero en mayusculas sin cortes
    // Mientras flag sea true
    var flag = true;
    while(flag){
        if (cadena.includes("101")) { // Si la cadena incluye este cadena
            cont101++; // El contador aumenta en uno
            var x = cadena.search("101"); // Almacenamos la posicion del inicio de la cadena
            cadena = cadena.slice(x+1); // Realizamos una subcadena a partir de x mas uno, para no repetir el mismo patron.
        }else{ // Si no hay mas coincidencia del patron
            flag = false;
        }
    }

    var cadena = texto; // Igualamos cadeno a texto para obtener el String entero en mayusculas sin cortes
    // Mientras flag sea true
    var flag = true;
    while(flag){
        if (cadena.includes("ABC")) {// Si la cadena incluye este cadena
            contABC++;// El contador aumenta en uno
            var x = cadena.search("ABC");// Almacenamos la posicion del inicio de la cadena
            cadena = cadena.slice(x+1);// Realizamos una subcadena a partir de x mas uno, para no repetir el mismo patron.
        }else{// Si no hay mas coincidencia del patron
            flag = false;
        }
    }

    var cadena = texto; // Igualamos cadeno a texto para obtener el String entero en mayusculas sin cortes
    // Mientras flag sea true
    var flag = true;
    while(flag){
        if (cadena.includes("HO")) {// Si la cadena incluye este cadena
            contHO++;// El contador aumenta en uno
            var x = cadena.search("HO");// Almacenamos la posicion del inicio de la cadena
            cadena = cadena.slice(x+1);// Realizamos una subcadena a partir de x mas uno, para no repetir el mismo patron.
        }else{// Si no hay mas coincidencia del patron
            flag = false;
        }
    }

    // Eliminamos el contenido del contenedor HTML
    document.getElementById("contenedor").innerHTML = "";

    // Mostramos por pantalla cuantas veces aparecen los patrones
    document.getElementById("contenedor").innerHTML += "00 = " + cont00 + " / ";
    document.getElementById("contenedor").innerHTML += "101 = " + cont101 + " / ";
    document.getElementById("contenedor").innerHTML += "ABC = " + contABC + " / ";
    document.getElementById("contenedor").innerHTML += "HO = " + contHO + " / ";
}
