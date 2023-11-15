var opcion = prompt("1. Potencia / 2. Raiz / 3. Redondo / 4. Trigonometria. Introduce una opcion (1-4):");

switch ((Number(opcion))) {
case 1:
        let base = prompt("Introduce una base");
        let expo = prompt("Introduce un exponente");
        alert("La potencia de " + base + "elevado a " + expo + " es = " + base ** expo);
        break;

    case 2:
        let x = prompt("Introduce un número positivo");
        alert("La potencia de " + x + " es = " + Math.sqrt(x));
        break;

    case 3:
        let y = prompt("Introduce un número");
        alert("Redondear hacia arriba " + parseFloat(y) + " es = " + Math.ceil(parseFloat(y)));
        alert("Redondear hacia abajo " + parseFloat(y) + " es = " + Math.floor(parseFloat(y)));
        break;


    default:
        alert("Introduce un número entre 1 y 4");

}