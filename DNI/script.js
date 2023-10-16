function dnivalidator() {

    var dni = document.getElementById("dni").value;
    var letraU = document.getElementById("letraU").value;
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B ', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    if (dni<0 || dni>99999999) {
        alert("El DNI proporcionado no es valido");
    } else{
        var ubi = dni%23;
        var letra = letras[ubi];
    }

    if (letraU == letra) {
        alert("El DNI es correcto")
    } else{
        alert("El DNI no es correcto. A este número de DNI: " + dni + ", le corresponde la letra: " + letra)
    }
}