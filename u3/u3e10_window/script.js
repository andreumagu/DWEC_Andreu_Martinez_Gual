var ventana;

function nuevaVentana() {
    if (confirm("¿Quieres abrir una nueva ventana?")) {
        ventana = window.open("ventana.html", "", "width=200,height=80,top=500,left=500,toolbar=no,location=no,menubar=no,resizable=no");
    }
}

function cerrarVentana() {
    ventana.close();
}

function cerrarVentanaPeq() {
    window.close();
}

function moverVentana10() {
    ventana.moveBy(10,10);
}

function ubicarVentana100() {
    ventana.moveTo(100,100);
}

function aumentarVentana10() {
    ventana.resizeBy(10, 10);
}

function aumentarVentana400() {
    ventana.resizeTo(400, 200);
}

function scrollUp() {
    ventana.scrollTo(0,0);
}

function scrollUp10() {
    ventana.scrollTo(0,10);
}