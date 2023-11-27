function opcion() {
    var opcion = Number(document.getElementById("opcion").value);
    

    if (opcion == 1) {
        document.getElementById("contenedor").innerHTML += "<p>Introduce una base y un exponente</p>";
        var base = document.createElement("input");
        var expo = document.createElement("input");
        var base = document.createElement("input");
        base.id = "base";
        expo.id = "exponente";
        op.id = "operar";
        op.type = "submit";
        document.getElementById("contenedor").appendChild(base);
        document.getElementById("contenedor").appendChild(expo);
        document.getElementById("contenedor").appendChild(op);
        var sol = base.value ** expo.value;
    }

    document.getElementById("contenedor").innerHTML += "00 = " + cont00 + " ";
    document.getElementById("contenedor").innerHTML += "101 = " + cont101 + " ";
    document.getElementById("contenedor").innerHTML += "ABC = " + contABC + " ";
    document.getElementById("contenedor").innerHTML += "HO = " + contHO + " ";
}
