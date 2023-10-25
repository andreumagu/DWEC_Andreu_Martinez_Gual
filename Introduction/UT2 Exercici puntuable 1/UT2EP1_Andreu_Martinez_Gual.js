// Bucle for para crear la tabla del 7
for (let i = 1; i <= 10; i++) {
    // Incrusto el resultado junto trazos de cadena de texto en "t7" del html 
    document.getElementById("t7").innerHTML += "<br>" + "7x" + i + " = " + (7 * i);
}

// Bucle while para crear la tabla del 8
var num8 = 1
while (num8 <= 10) {
    // Incrusto el resultado junto trazos de cadena de texto en "t8" del html 
    document.getElementById("t8").innerHTML += "<br>" + "8+" + num8 + " = " + (8 + num8);
    num8 ++;
}

// Bucle do while para crear la tabla del 9
var num9 = 1
do {
    // Incrusto el resultado junto trazos de cadena de texto en "t9" del html 
    document.getElementById("t9").innerHTML += "<br>" + "9/" + num9 + " = " + (9 / num9);
    num9 ++;
} while (num9 <= 10);


// Desplazamos 3 bits a la izquierda (dividimos)
document.getElementById("opBits").innerHTML += "<br>" + "125/8 = " + (125 >> 3);
// Desplazamos 2 bits a la derecha (multiplicamos)
document.getElementById("opBits").innerHTML += "<br>" + "40x4 = " + (40 << 2);
// Desplazamos 1 bit a la izquierda (dividimos)
document.getElementById("opBits").innerHTML += "<br>" + "25/2 = " + (25 >> 1);
// Desplazamos 4 bits a la derecha (multiplicamos)
document.getElementById("opBits").innerHTML += "<br>" + "10x16 = " + (10 << 4);