function Potencias(Base, Nummax) {
    var Valores = [];
    for (let i = 0; (Base ** i) < Nummax; i++) {
        x = Base ** i;
        Valores += x;
    }
    return Valores;
}

function ArrayToString(Array){
    var Cadena = "";
    Array.forEach(element => {
        Cadena += element + " ";
    });
    return Cadena;
}

document.getElementById("potencias").innerHTML = ArrayToString(Potencias(2, 3000));