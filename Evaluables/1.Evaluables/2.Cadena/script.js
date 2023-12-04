function comprobar(params) {
    var text = document.getElementById("cadena").value;
    var texto = text.toUpperCase();
    var cadena = texto;

    var cont00 = 0;
    var cont101 = 0;
    var contABC = 0;
    var contHO = 0;

    var flag = true;
    while(flag){
        if (cadena.includes("00")) {
            cont00++;
            var x = cadena.search("00");
            cadena = cadena.slice(x+1);
        }else{
            flag = false;
        }
    }

    var cadena = texto;
    var flag = true;
    while(flag){
        if (cadena.includes("101")) {
            cont101++;
            var x = cadena.search("101");
            cadena = cadena.slice(x+1);
        }else{
            flag = false;
        }
    }

    var cadena = texto;
    var flag = true;
    while(flag){
        if (cadena.includes("ABC")) {
            contABC++;
            var x = cadena.search("ABC");
            cadena = cadena.slice(x+1);
        }else{
            flag = false;
        }
    }

    var cadena = texto;
    var flag = true;
    while(flag){
        if (cadena.includes("HO")) {
            contHO++;
            var x = cadena.search("HO");
            cadena = cadena.slice(x+1);
        }else{
            flag = false;
        }
    }

    document.getElementById("contenedor").innerHTML += "00 = " + cont00 + " ";
    document.getElementById("contenedor").innerHTML += "101 = " + cont101 + " ";
    document.getElementById("contenedor").innerHTML += "ABC = " + contABC + " ";
    document.getElementById("contenedor").innerHTML += "HO = " + contHO + " ";
}
