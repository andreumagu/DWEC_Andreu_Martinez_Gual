function comprobar(params) {

}

// Inicio y fin de jornada laboral
const constIniciDeJornada = "07:30";
const constFinalDeJornada = "17:45";

function horasAMS(hora) {
    // Divide la cadena de hora en horas y minutos
    const [horas, minutos] = hora.split(":").map(Number);

    // Calcula el total de milisegundos
    const msEnHora = 60 * 60 * 1000; // 1 hora en milisegundos
    const msEnMinuto = 60 * 1000; // 1 minuto en milisegundos

    // Calcula los ms totales de la hora
    const msTotales = horas * msEnHora + minutos * msEnMinuto;
    return msTotales;
}

// Funcion para comprobar si se puede agendar un reunion
function agendarReunio(horaDInici, duracioEnMinuts) {
    // Inicializamos la hora de inicio de jornada y a hora de fin de jornada en ms
    var inicio = horasAMS(constIniciDeJornada);
    var fin = horasAMS(constFinalDeJornada);

    // Si la hora de la reunion es despues de la hora de inicio de jornada y la duracion de la jornada no dura mas que la hora de fin de jornada, entra
    if (horasAMS(horaDInici) >= inicio && (duracioEnMinuts * 60 * 1000) <= (fin - horasAMS(horaDInici))) {
        // Se puede añadir la reunion
        return true;
    }else{
        // No se puede añadir la reunion
        return false;
    }
}

console.assert(agendarReunio("7:00", 15) === false, 'Error comprobando agendarReunio("7:00", 15) === false');
console.assert(agendarReunio("07:15", 30) === false, 'Error comprobando agendarReunio("07:15", 30) === false');
console.assert(agendarReunio("7:30", 30) === true, 'Error comprobando agendarReunio("7:30", 30) === true');
console.assert(agendarReunio("11:30", 60) === true, 'Error comprobando agendarReunio("11:30", 60) === true');
console.assert(agendarReunio("17:00", 45) === true, 'Error comprobando agendarReunio("17:00", 45) === true');
console.assert(agendarReunio("17:30", 30) === false, 'Error comprobando agendarReunio("17:30", 30) === false');
console.assert(agendarReunio("18:00", 15) === false, 'Error comprobando agendarReunio("18:00", 15) === false');
console.assert(agendarReunio("15:30", 180) === false, 'Error comprobando agendarReunio("15:30", 180) === false');

console.log("Test Done!");
