class Aeropuerto{
    // Contructor de la clase Aeropuerto
    constructor(nombre, cuidad, numVuelos) {
        this.vuelos = [];
        this.nombre = nombre;
        this.cuidad = cuidad;
        this.numVuelos = numVuelos;
    }

    // Metodo para añadir un nuevo vuelo a la lista de vuelos del aeropuerto y incrementar en uno la cantidad de vuelos del aeropuerto
    anadirVuelo(vuelo){
        this.vuelos.push(vuelo);
        this.numVuelos++;
    }

    // Metodo para modificar las horas de salida y llegada de un vuelo
    modificarHora(codigo, nuevaHoraSalida, nuevaHoraLlegada){
        var vuelo = this.vuelos.find((vuelo) => vuelo.codigo === codigo); // Buscamos el vuelo por su codigo en la lista de vuelos del aeropuerto

        if (nuevaHoraSalida < nuevaHoraLlegada) { // Si la hora de llegada es posterior a la hora de salida
            vuelo.setHoraSalida(nuevaHoraSalida); // Modificamos la hora de salida
            vuelo.setHoraLlegada(nuevaHoraLlegada); // Modificamos la hora de llegada
            console.log("El vuelo con codigo: " + vuelo.codigo + " ha sido modificado");
        }else{
            console.log("El vuelo con codigo: " + vuelo.codigo + " no ha podido ser modificado debido a que la hora de salida es posterior a la hora de llegada")
        }
    }

}

class Vuelo{
    // Contructor de la clase Vuelo
    constructor(codigo, horaSalida, horaLlegada) {
        this.codigo = codigo;
        this.horaSalida = horaSalida;
        this.horaLlegada = horaLlegada;
    }
    
    // Establecer la hora de llegada
    setHoraLlegada(hora){
        this.horaLlegada = hora;
    }
    
    // Establecer la hora de salida
    setHoraSalida(hora){
        this.horaSalida = hora;
    }

}

var aeropuerto = new Aeropuerto("Barajas", "Madrid", 0); // Creamos el aeropueto

var vuelo1 = new Vuelo("2143546", 12, 15); // Creamos un vuelo
aeropuerto.anadirVuelo(vuelo1); // Agregamos el vuelo a la lista de vuelos del aeropuerto
var vuelo2 = new Vuelo("4567343", 5, 8); // Creamos otro vuelo
aeropuerto.anadirVuelo(vuelo2); // Agregamos el vuelo a la lista de vuelos del aeropuerto

// Mostramos por pantalla los datos de los vuelos
console.log(vuelo1.codigo, vuelo1.horaSalida, vuelo1.horaLlegada);
console.log(vuelo2.codigo, vuelo2.horaSalida, vuelo2.horaLlegada);

// Modificamos las hora de salida y llegada de los vuelos
aeropuerto.modificarHora("2143546",5,1);
aeropuerto.modificarHora("4567343",8,12);

// Mostramos por pantalla los datos de los vuelos
console.log(vuelo1.codigo, vuelo1.horaSalida, vuelo1.horaLlegada);
console.log(vuelo2.codigo, vuelo2.horaSalida, vuelo2.horaLlegada);