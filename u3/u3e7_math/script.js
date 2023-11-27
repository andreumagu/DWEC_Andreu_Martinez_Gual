var num = prompt("Introduce un número entero:");

function expoVal(num) {
    val = Number(num).toExponential();
    return val;
}

function limitarDecimal(num) {
    val = Number(num).toFixed(4);
    return val;
}

function toBinari(num) {
    val = Number(num).toString(2);
    return val;
}

function toOctal(num) {
    val = Number(num).toString(8);
    return val;
}

function toHexa(num) {
    val = Number(num).toString(16);
    return val;
}


contenedor = document.getElementById("contenedor");

contenedor.innerHTML += "<b>Valor exponencial = </b>" + expoVal(num) + "<br>";
contenedor.innerHTML += "<b>Valor con 4 decimales = </b>" + limitarDecimal(num) + "<br>";
contenedor.innerHTML += "<b>Valor en binario = </b>" + toBinari(num) + "<br>";
contenedor.innerHTML += "<b>Valor en octal = </b>" + toOctal(num) + "<br>";
contenedor.innerHTML += "<b>Valor en hexadecimal = </b>" + toHexa(num) + "<br>";