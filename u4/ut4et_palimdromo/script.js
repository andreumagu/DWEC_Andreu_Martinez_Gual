var cadena = prompt("Escribe algo:");

function esPalindromo(cadena) {
    cadena = cadena.replaceAll(" ", "");
    cadena = cadena.toLowerCase();
    var atras = "";

    for (let i = cadena.length; i >= 0; i--) {
        atras += cadena.charAt(i);
    }

    if (cadena == atras) {
        return true;
    }else{
        return false;
    }
}

alert(esPalindromo(cadena));
