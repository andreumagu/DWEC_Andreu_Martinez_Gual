// Inicializamos las Variables de la fecha de hoy
var FechaHoy = new Date();
var Aniversario = new Date(prompt("Intruduce la fecha de tu aniversario (año,mes,dia):"));

// Almacenamos en variables los valores de Año, mes y dia de la fecha inicio
var MesHoy = FechaHoy.getMonth();
var DiaHoy = FechaHoy.getDate();

var MesAniversario = FechaHoy.getMonth();
var diaAniversario = FechaHoy.getDate();

// Bucle se ejecutara mientras las valores de Año, mes y dia de las dos fechas sean distintos
// while (FechaHoy.getFullYear <= 2100) {
//     if (diaAniversario == ) {
        
//     }
// }


document.getElementById("contenedor").innerHTML =+ Diferencia;
