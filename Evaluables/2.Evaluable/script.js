// Creamos un array de objetos de ciudades del mundo, con su numbre y su latitud y longitud (coordenadas)
var ciudades = [
    { nombre: "Nueva York", lat: 40.7128, lon: -74.0060 },
    { nombre: "Londres", lat: 51.5099, lon: -0.1180 },
    { nombre: "París", lat: 48.8566, lon: 2.3522 },
    { nombre: "Tokio", lat: 35.6895, lon: 139.6917 },
    { nombre: "Pekín", lat: 39.9042, lon: 116.4074 },
    { nombre: "Roma", lat: 41.9028, lon: 12.4964 },
    { nombre: "Sídney", lat: -33.8688, lon: 151.2093 },
    { nombre: "Berlín", lat: 52.5200, lon: 13.4050 },
    { nombre: "Madrid", lat: 40.4168, lon: -3.7038 },
    { nombre: "Ciudad de México", lat: 19.4326, lon: -99.1332 },
    { nombre: "Toronto", lat: 43.6510, lon: -79.3470 },
    { nombre: "Río de Janeiro", lat: -22.9068, lon: -43.1729 },
    { nombre: "Estambul", lat: 41.0082, lon: 28.9784 },
    { nombre: "Moscú", lat: 55.7558, lon: 37.6176 },
    { nombre: "Bangkok", lat: 13.7563, lon: 100.5018 },
    { nombre: "Dubái", lat: 25.2769, lon: 55.2962 },
    { nombre: "Seúl", lat: 37.5665, lon: 126.9780 },
    { nombre: "Los Ángeles", lat: 34.0522, lon: -118.2437 },
    { nombre: "Chicago", lat: 41.8781, lon: -87.6298 },
    { nombre: "Sao Paulo", lat: -23.5505, lon: -46.6333 }
];

// Arrays de pistas para cada ciudad
var pistasNuevaYork = [
    "Ciudad que alberga el famoso Times Square",
    "Cuna del hip-hop y el punk",
    "Ubicada en el estado de Nueva York"
];

var pistasLondres = [
    "La ciudad del río Támesis",
    "Hogar de Sherlock Holmes",
    "Centro cultural y financiero del Reino Unido"
];

var pistasParis = [
    "Destino romántico con calles empedradas",
    "Cuna de la Revolución Francesa",
    "Famosa por su alta cocina y moda"
];

var pistasTokio = [
    "Ciudad tecnológica con luces de neón",
    "Sede de la industria del manga y anime",
    "Ofrece una mezcla única de tradición y modernidad"
];

var pistasPekin = [
    "Capital milenaria con una gran muralla",
    "Cuna de la antigua dinastía Ming",
    "Sede de los Juegos Olímpicos de 2008"
];

var pistasRoma = [
    "Ciudad eterna con monumentos antiguos",
    "Cuna del Imperio Romano",
    "Famosa por el Coliseo y el Vaticano"
];

var pistasSidney = [
    "Ciudad costera con la Ópera de Sídney",
    "Puente del Puerto ofrece vistas impresionantes",
    "Hogar de la Gran Barrera de Coral"
];

var pistasBerlin = [
    "Capital con historia marcada por la Guerra Fría",
    "Famosa por su vida nocturna",
    "Cuna de la escuela de diseño Bauhaus"
];

var pistasMadrid = [
    "Capital con bulliciosas plazas y vida nocturna",
    "Famosa por el Museo del Prado",
    "Centro de la cultura española"
];

var pistasCiudadMexico = [
    "Capital con una rica historia precolombina",
    "Cuna de la civilización azteca",
    "Ofrece una mezcla de arquitectura colonial y moderna"
];

var pistasToronto = [
    "Principal ciudad canadiense con diversidad cultural",
    "Famosa por la CN Tower y las Cataratas del Niágara",
    "Ubicada a orillas del lago Ontario"
];

var pistasRioJaneiro = [
    "Ciudad carioca famosa por su carnaval",
    "Hogar de la estatua del Cristo Redentor",
    "Ubicada en la costa atlántica de Brasil"
];

var pistasEstambul = [
    "Ciudad transcontinental entre Europa y Asia",
    "Antigua capital de tres imperios sucesivos",
    "Conocida por sus mezquitas y bazares"
];

var pistasMoscú = [
    "Capital rusa con una rica historia",
    "Famosa por la Plaza Roja y la Catedral de San Basilio",
    "Centro político, económico y cultural del país"
];

var pistasBangkok = [
    "Capital tailandesa con templos ornamentados",
    "Conocida por su animada vida callejera",
    "Ubicada a orillas del río Chao Phraya"
];

var pistasDubai = [
    "Ciudad de los rascacielos y el lujo",
    "Famosa por el Burj Khalifa y las islas artificiales",
    "Importante centro financiero y turístico"
];

var pistasSeul = [
    "Capital con alta tecnología y tradiciones antiguas",
    "Hogar de palacios históricos y mercados vibrantes",
    "Centro de la ola coreana en entretenimiento y música"
];

var pistasLosAngeles = [
    "Centro de la industria del entretenimiento en Hollywood",
    "Ubicada en el estado de California",
    "Famosa por sus playas y estilo de vida relajado"
];

var pistasChicago = [
    "Ciudad arquitectónicamente innovadora",
    "Ubicada en la costa del lago Míchigan",
    "Conocida por su arquitectura y escena musical"
];

var pistasSaoPaulo = [
    "Principal ciudad brasileña y centro financiero",
    "Famosa por su diversidad cultural y culinaria",
    "Centro de la escena artística y de diseño en América Latina"
];

// Variable para almacenar la ubicación actual de Carmen Sandiego
var ubicacionCarmen;

// Función que inicia el juego
function iniciarJuego(){
    ubicacionCarmen = randomCity(ciudades); // Seleccionamos una ubicación aleatoria donde Carmen Sandiego se escondera
    tiempo = 20; // Establecemos el tiempo en segundos del contador
    cuentaAtras(); // Iniciamos la cuenta atras
}

// Función que reinicia el juego
function reiniciarJuego(){
    document.getElementById("ciudadesSelect").value = -1; // Seleccionamos la opcion por defecto del select
    document.getElementById("pista").innerHTML = "¿Necesitas una pista? Pasa el mouse sobre Carmen Sandiego ;D"; // Cambiamos el texto del recuadro de las pistas
    clearTimeout(timeoutId); // Detenemos el temporizador
    iniciarJuego(); // Iniciamos el juego
}

var tiempo = 20; // Establecemos el tiempo en segundos del contador
var timeoutId; // Identificador del contador

// Función que realiza la cuenta atrás
function cuentaAtras() {
    document.getElementById('cuentaAtras').innerHTML = tiempo;
    if(tiempo == 0){
        $('#finTiempo').modal('show'); // Mostramos popup de derrota
    }else{
        if (comprobarCiudad() == false) { // Restamos 1s al cintador si no se encontrado a Carmen Sandiego
            tiempo-=1;
            timeoutId = setTimeout("cuentaAtras()",1000);
        }
    }
}

// Llenamos el select con los objetos del array ciudades
ciudades.forEach(function(ciudad, i) {
    var option = document.createElement("option");
    option.value = i; // El valor es la posición en el array
    option.text = ciudad.nombre; // El texto legible es el nombre de la ciudad
    document.getElementById("ciudadesSelect").add(option);
});

// Función que selecciona una ciudad aleatoria del array ciudades
function randomCity(ciudades){
    return ciudades[Math.round(Math.random() * 19)];
}

// Función que comprueba si la ciudad seleccionada coincide con la ubicación de Carmen Sandiego
function comprobarCiudad(){
    if(document.getElementById("ciudadesSelect").value >= 0){
        var ubicacionSelect = ciudades[Number(document.getElementById("ciudadesSelect").value)]; // Obtenemos el objecto de la ciudad seleccionada
        document.getElementById("distancia").innerHTML = calcularDistancia() + "Km"; // Pintamos la distancia entre las dos ubicaciones
        if (ubicacionCarmen == ubicacionSelect && tiempo > 0) {
            $('#myModal').modal('show'); // Mostramos popup de victoria
            return true;
        } else{
            return false;
        }
    } else{
        return false;
    }
    
}

// Función que calcula la distancia entre la ubicación de Carmen y la ciudad seleccionada
function calcularDistancia() {
    if(document.getElementById("ciudadesSelect").value >= 0){ // Se comprueba que la opcion seleccionado sea la de por defecto
        const R = 6371; // Radio de la Tierra en kilómetros
        var ubicacionSelect = ciudades[Number(document.getElementById("ciudadesSelect").value)]; // Obtenemos el objecto de la ciudad seleccionada

        // Convertir las lates y longitudes de grados a radianes
        const lat1Rad = toRad(ubicacionCarmen.lat);
        const lon1Rad = toRad(ubicacionCarmen.lon);
        const lat2Rad = toRad(ubicacionSelect.lat);
        const lon2Rad = toRad(ubicacionSelect.lon);

        // Calcular las diferencias de lat y longitud
        const deltaLat = lat2Rad - lat1Rad;
        const deltaLon = lon2Rad - lon1Rad;

        // Calcular la fórmula haversine (nos permite saber la distancia entre dos puntos de la tierra)
        const a = Math.sin(deltaLat / 2) ** 2 + Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(deltaLon / 2) ** 2;
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        // Calcular la distancia final
        const distancia = R * c;

        return Math.trunc(distancia);
    }
    
}

// Convertir grados a radianes
function toRad(grados) {
    return grados * (Math.PI / 180);
}

// Función que proporciona pistas sobre la ciudad donde se esconde Carmen Sandiego
function pista(){
    let i = Math.round(Math.random() * 2);
    switch (ciudades.indexOf(ubicacionCarmen)) {
        case 0:
            document.getElementById("pista").innerHTML = pistasNuevaYork[i];
            break;
        case 1:
            document.getElementById("pista").innerHTML = pistasLondres[i];
            break;
        case 2:
            document.getElementById("pista").innerHTML = pistasParis[i];
            break;
        case 3:
            document.getElementById("pista").innerHTML = pistasTokio[i];
            break;
        case 4:
            document.getElementById("pista").innerHTML = pistasPekin[i];
            break;
        case 5:
            document.getElementById("pista").innerHTML = pistasRoma[i];
            break;
        case 6:
            document.getElementById("pista").innerHTML = pistasSidney[i];
            break;
        case 7:
            document.getElementById("pista").innerHTML = pistasBerlin[i];
            break;
        case 8:
            document.getElementById("pista").innerHTML = pistasMadrid[i];
            break;
        case 9:
            document.getElementById("pista").innerHTML = pistasCiudadMexico[i];
            break;
        case 10:
            document.getElementById("pista").innerHTML = pistasToronto[i];
            break;
        case 11:
            document.getElementById("pista").innerHTML = pistasRioJaneiro[i];
            break;
        case 12:
            document.getElementById("pista").innerHTML = pistasEstambul[i];
            break;
        case 13:
            document.getElementById("pista").innerHTML = pistasMoscú[i];
            break;
        case 14:
            document.getElementById("pista").innerHTML = pistasBangkok[i];
            break;
        case 15:
            document.getElementById("pista").innerHTML = pistasDubai[i];
            break;
        case 16:
            document.getElementById("pista").innerHTML = pistasSeul[i];
            break;
        case 17:
            document.getElementById("pista").innerHTML = pistasLosAngeles[i];
            break;
        case 18:
            document.getElementById("pista").innerHTML = pistasChicago[i];
            break;
        case 19:
            document.getElementById("pista").innerHTML = pistasSaoPaulo[i];
            break;
        default:
            document.getElementById("pista").innerHTML = "Debes inicar el juego";
    }
}