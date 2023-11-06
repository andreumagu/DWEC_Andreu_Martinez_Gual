class Colegio{
    // Contructor de la clase Colegio
    constructor(nombre, aulas, numAlumnos) {
        this.alumnos = [];
        this.nombre = nombre;
        this.aulas = aulas;
        this.numAlumnos = numAlumnos;
    }

    // Metodo para añadir un nuevo alumno a la lista de alumnos del colegio y incrementar en uno la cantidad de alumnos de colegio
    anadirAlumno(alumno){
        this.alumnos.push(alumno);
        this.numAlumnos++;
    }

    // Metodo para modificar la nota media de un alumno
    modificarNota(dni, nuevaNota){
        var alumno = this.alumnos.find((alumno) => alumno.dni === dni); // Buscamos el alumno por su dni en la lista de alumnos del colegio
        alumno.setNota(nuevaNota); // Modificamos la nota del alumno
    }

}

class Alumno{
    // Contructor de la clase Alumno
    constructor(dni, nombre, notaMedia) {
        this.dni = dni;
        this.nombre = nombre;
        this.notaMedia = notaMedia;
    }
    
    // Establecer la nota del alumno
    setNota(nota){
        this.notaMedia = nota;
    }

}

var colegio = new Colegio("Cesur", 10, 0); // Creamos el colegio

var alumno1 = new Alumno("12345685P", "Pepe", 10); // Creamos un alumno
colegio.anadirAlumno(alumno1); // Agregamos el alumno a la lista de alumnos del colegio
var alumno2 = new Alumno("87654345F", "Antonio", 10); // Creamos otro alumno
colegio.anadirAlumno(alumno2); // Agregamos el alumno a la lista de alumnos del colegio

// Mostramos por pantalla los datos de los alumnos
console.log(alumno1.dni, alumno1.nombre, alumno1.notaMedia);
console.log(alumno2.dni, alumno2.nombre, alumno2.notaMedia);

// Modificamos la nota de los alumnos
colegio.modificarNota("12345685P", 5);
colegio.modificarNota("87654345F", 7);

// Mostramos por pantalla los datos de los alumnos
console.log(alumno1.dni, alumno1.nombre, alumno1.notaMedia);
console.log(alumno2.dni, alumno2.nombre, alumno2.notaMedia);