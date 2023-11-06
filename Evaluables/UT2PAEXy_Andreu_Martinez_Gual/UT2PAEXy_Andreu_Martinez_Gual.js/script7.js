class Hospital{
    // Contructor de la clase Hospital
    constructor(nombre, cuidad, numPacientes) {
        this.pacientes = [];
        this.nombre = nombre;
        this.cuidad = cuidad;
        this.numPacientes = numPacientes;
    }

    // Metodo para añadir un nuevo paciente a la lista de pacientes del hospital y incrementar en uno la cantidad de pacientes del hospital
    anadirPaciente(paciente){
        this.pacientes.push(paciente);
        this.numPacientes++;
    }

    // Metodo para dar de alta un paciente
    darAlta(dni){
        var paceinte = this.pacientes.find((paciente) => paciente.dni === dni); // Buscamos el paciente por su dni en la lista de pacientes del hospital

        // Si el paciente existe
        if (paceinte != null) {
            this.pacientes.shift(paceinte);
            this.numPacientes--;
            console.log("El paciente con DNI: " + dni + " se ha dado de alta");
        }else{ // Si no existe
            console.log("El paciente con DNI: " + dni + " no existe");
        }

    }

}

class Paciente{
    // Contructor de la clase Paciente
    constructor(dni, nombre, enfermedad) {
        this.dni = dni;
        this.nombre = nombre;
        this.enfermedad = enfermedad;
    }
}

var hospital = new Hospital("Miramar", "Mallorca", 0); // Creamos el hospital

var paceinte1 = new Paciente("45683461T", "Pepe", "Apendicitis"); // Creamos un paciente
hospital.anadirPaciente(paceinte1); // Agregamos el paciente a la lista de pacientes del hospital
var paceinte2 = new Paciente("75324678D", "Juan", "Gripe"); // Creamos otro paciente
hospital.anadirPaciente(paceinte2); // Agregamos el paciente a la lista de pacientes del hospital

// Mostramos por pantalla el array de los pacientes del hospital y el numero de pacientes
console.log(hospital.pacientes);
console.log(hospital.numPacientes);

// Damos de alta a un paceinte
hospital.darAlta("45683461T");

// Damos de alta a un paceinte que no existe
hospital.darAlta("43546576P");

// Mostramos por pantalla el array de los pacientes del hospital y el numero de pacientes
console.log(hospital.pacientes);
console.log(hospital.numPacientes);