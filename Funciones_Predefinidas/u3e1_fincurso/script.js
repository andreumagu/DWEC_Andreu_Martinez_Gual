// Inicializamos las Variables de la fecha de inicio y la fecha de fin
var FechaFin = new Date("2024,06,24");
var FechaHoy = new Date();

// Almacenamos en variables los valores de Año, mes y dia de la fecha fin
var AñoFin = FechaFin.getFullYear();
var MesFin = FechaFin.getMonth();
var DiaFin = FechaFin.getDate();

// Almacenamos en variables los valores de Año, mes y dia de la fecha inicio
var AñoHoy = FechaHoy.getFullYear();
var MesHoy = FechaHoy.getMonth();
var DiaHoy = FechaHoy.getDate();

// Inicializamos la diferencia de dias entre las dos fechas en 0
var Diferencia = 0;


// Bucle se ejecutara mientras las valores de Año, mes y dia de las dos fechas sean distintos
while (AñoHoy != AñoFin || MesHoy != MesFin || DiaHoy != DiaFin) {
    // Incrementa en uno los dias de diferencia
    Diferencia ++;
    // Icrementamos el Dia de Inicio (Avazamos un dia)
    DiaHoy ++;
    // En el caso de que el dia por el que estamos sea mayor los dias que tenga el mes por el que estamos entra en el if
    if (DiaHoy > new Date(AñoHoy, MesHoy + 1, 0).getDate()){
        // Igualamos el dia inicio a 1 para empezar un nuevo mes
        DiaHoy = 1;
        // Incrementamos el mes en uno para empezar a recorrer el siguiente mes
        MesHoy++;
        // El el caso de que el mes que estemos recorriendo es mayor a 11(diciembre) ejecuta esto
        if (MesHoy > 11) {
            // Pasamos el siguinete año
            AñoHoy ++;
            // Passamos el mes a 0(enero)
            MesHoy = 0;
        }
    }
    
}


document.getElementById("contenedor").innerHTML =+ Diferencia;
