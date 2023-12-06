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

// Arrays de pistas para cada ciudad con diferentes niveles de dificultad
var pistasNuevaYork = [
    // Fácil
    ["Conocida como la Gran Manzana", "Famosa por la Estatua de la Libertad", "Ubicada en la costa este de EE. UU."],
    // Medio
    ["Uno de los distritos más diversos del mundo", "Epicentro de la cultura hip-hop", "Parques icónicos como el Central Park"],
    // Difícil
    ["Alberga la Biblioteca Pública más grande de EE. UU.", "Ubicación de la famosa High Line", "Centro de las finanzas internacionales y la Bolsa de Nueva York"]
];

var pistasLondres = [
    // Fácil
    ["Capital del Reino Unido", "El río Támesis la atraviesa", "Famosa por el Palacio de Buckingham"],
    // Medio
    ["Residencia de la realeza británica", "Escenario de los Juegos Olímpicos de 2012", "Teatros del West End"],
    // Difícil
    ["Influencia histórica del Imperio Británico", "Epicentro de la Revolución Industrial", "Distrito financiero con el Gherkin y el Shard"]
];

var pistasParis = [
    // Fácil
    ["Destino romántico con calles empedradas", "Cuna de la Revolución Francesa", "Famosa por su alta cocina y moda"],
    // Medio
    ["Conocida como la Ciudad de la Luz", "El río Sena la atraviesa", "Importante centro artístico y cultural"],
    // Difícil
    ["Sede de la Liga de la Justicia", "Influencia de la Belle Époque y el Art Nouveau", "Alberga famosos museos como el Louvre y el Museo de Orsay"]
];

var pistasTokio = [
    // Fácil
    ["Capital tecnológica de Japón", "Famosa por sus rascacielos y luces de neón", "Centro de la cultura pop"],
    // Medio
    ["Sede de la industria del manga y el anime", "Ofrece una mezcla única de tradición y modernidad", "Alberga el Palacio Imperial"],
    // Difícil
    ["Antigua Edo con una rica historia samurái", "Epicentro de la tecnología y la innovación", "Escenario de la película 'Lost in Translation'"]
];

var pistasPekin = [
    // Fácil
    ["Capital de China con una rica historia", "Construida alrededor de la Ciudad Prohibida", "Cuna de la dinastía Ming"],
    // Medio
    ["Famosa por la Gran Muralla China", "Epicentro de la vida política china", "Escenario de los Juegos Olímpicos de 2008"],
    // Difícil
    ["Influencia de la Dinastía Qing", "Alberga la Plaza de Tiananmen", "Centro cultural con la Ciudad Prohibida y el Templo del Cielo"]
];

var pistasRoma = [
    // Fácil
    ["Ciudad eterna con monumentos antiguos", "Cuna del Imperio Romano", "Famosa por el Coliseo y el Foro Romano"],
    // Medio
    ["Sede del Vaticano y la Basílica de San Pedro", "Influencia de la Antigua Roma en la arquitectura", "Alberga la Fontana di Trevi"],
    // Difícil
    ["Centro cultural y religioso de Italia", "Ruinas antiguas como el Palatino", "Famosa por la Capilla Sixtina de Miguel Ángel"
    ]
];

var pistasSidney = [
    // Fácil
    ["Ciudad costera con la Ópera de Sídney", "Puente del Puerto ofrece vistas impresionantes", "Hogar de la Gran Barrera de Coral"],
    // Medio
    ["Epicentro cultural y económico de Australia", "Famosa por la arquitectura moderna", "Ubicada en Nueva Gales del Sur"],
    // Difícil
    ["Influencia aborigen en la cultura", "Alberga la Galería de Arte de Nueva Gales del Sur", "Escenario de los Juegos Olímpicos de 2000"]
];

var pistasBerlin = [
    // Fácil
    ["Capital con historia marcada por la Guerra Fría", "Famosa por su vida nocturna", "Cuna de la escuela de diseño Bauhaus"],
    // Medio
    ["Influencia de la Guerra Fría en la arquitectura", "Alberga el Muro de Berlín como monumento histórico", "Epicentro artístico y cultural"],
    // Difícil
    ["Escenario clave en la Guerra Fría", "Centro cultural con la Isla de los Museos", "Famosa por su arquitectura moderna y la Puerta de Brandeburgo"]
];

var pistasMadrid = [
    // Fácil
    ["Capital con bulliciosas plazas y vida nocturna", "Famosa por el Museo del Prado", "Centro de la cultura española"],
    // Medio
    ["Influencia de la historia árabe y judía", "Epicentro gastronómico y cultural", "Alberga el Palacio Real de Madrid"],
    // Difícil
    ["Escenario de la Guerra Civil Española", "Centro cultural con el Triángulo del Arte", "Famosa por la Puerta del Sol y la Gran Vía"]
];

var pistasCiudadMexico = [
    // Fácil
    ["Capital con una rica historia precolombina", "Cuna de la civilización azteca", "Ofrece una mezcla de arquitectura colonial y moderna"],
    // Medio
    ["Influencia de la cultura azteca en la arquitectura", "Alberga la Plaza de la Constitución y la Catedral Metropolitana", "Epicentro gastronómico con la comida mexicana"],
    // Difícil
    ["Historia precolombina con las civilizaciones maya y azteca", "Escenario de la Revolución Mexicana", "Centro cultural con el Museo Frida Kahlo y el Palacio de Bellas Artes"
    ]
];

var pistasToronto = [
    // Fácil
    ["Principal ciudad canadiense con diversidad cultural", "Famosa por la CN Tower y las Cataratas del Niágara", "Ubicada a orillas del lago Ontario"],
    // Medio
    ["Influencia multicultural en la arquitectura", "Centro financiero y económico de Canadá", "Epicentro cultural con el Museo Real de Ontario"],
    // Difícil
    ["Historia colonial británica y francesa", "Escenario clave en la Guerra de 1812", "Centro cultural con la Galería de Arte de Ontario y el Distrito del Entretenimiento"
    ]
];

var pistasRioJaneiro = [
    // Fácil
    ["Ciudad carioca famosa por su carnaval", "Hogar de la estatua del Cristo Redentor", "Ubicada en la costa atlántica de Brasil"],
    // Medio
    ["Influencia africana en la cultura y la música", "Epicentro de la samba y la bossa nova", "Alberga el Pan de Azúcar y el Estadio Maracaná"],
    // Difícil
    ["Historia colonial portuguesa", "Centro cultural con el Museo de Arte Moderno y el Teatro Municipal", "Famosa por sus playas como Copacabana e Ipanema"]
];

var pistasEstambul = [
    // Fácil
    ["Ciudad transcontinental entre Europa y Asia", "Antigua capital de tres imperios sucesivos", "Conocida por sus mezquitas y bazares"],
    // Medio
    ["Influencia otomana en la arquitectura", "Alberga la Iglesia de Santa Sofía y la Mezquita Azul", "Epicentro cultural con el Gran Bazar"],
    // Difícil
    ["Historia otomana y bizantina", "Punto estratégico en la Ruta de la Seda", "Centro cultural con el Palacio de Topkapi y el Puente Gálata"]
];

var pistasMoscú = [
    // Fácil
    ["Capital rusa con una rica historia", "Famosa por la Plaza Roja y la Catedral de San Basilio", "Centro político, económico y cultural del país"],
    // Medio
    ["Influencia de la época zarista en la arquitectura", "Epicentro cultural con el Kremlin y la Galería Tretiakov", "Alberga la Universidad Estatal de Moscú"],
    // Difícil
    ["Historia soviética y la Revolución de Octubre", "Centro cultural con el Teatro Bolshói y la Biblioteca Lenin", "Famosa por la arquitectura estalinista y la Catedral de Cristo Salvador"]
];

var pistasBangkok = [
    // Fácil
    ["Capital tailandesa con templos ornamentados", "Conocida por su animada vida callejera", "Ubicada a orillas del río Chao Phraya"],
    // Medio
    ["Influencia budista en la arquitectura y la cultura", "Epicentro culinario con la comida callejera", "Alberga el Gran Palacio y el Templo del Buda Esmeralda"],
    // Difícil
    ["Historia real tailandesa y la dinastía Chakri", "Centro cultural con el Museo Nacional de Bangkok y el Teatro de Siam Niramit", "Famosa por su vida nocturna y mercados flotantes"]
];

var pistasDubai = [
    // Fácil
    ["Ciudad de los rascacielos y el lujo", "Famosa por el Burj Khalifa y las islas artificiales", "Importante centro financiero y turístico"],
    // Medio
    ["Influencia árabe e islámica en la arquitectura", "Epicentro de compras y entretenimiento", "Alberga el Burj Al Arab y el Dubai Mall"],
    // Difícil
    ["Historia de rápido desarrollo y modernización", "Centro cultural con la Ópera de Dubái y el Museo de Dubái", "Famosa por sus proyectos arquitectónicos innovadores"]
];

var pistasSeul = [
    // Fácil
    ["Capital con alta tecnología y tradiciones antiguas", "Hogar de palacios históricos y mercados vibrantes", "Centro de la ola coreana en entretenimiento y música"],
    // Medio
    ["Influencia de la dinastía Joseon en la arquitectura", "Epicentro de la tecnología y la moda", "Alberga la Torre de Seúl y el Palacio de Gyeongbokgung"],
    // Difícil
    ["Historia de ocupación japonesa y la Guerra de Corea", "Centro cultural con el Museo Nacional de Corea y el Templo Jogyesa", "Famosa por su gastronomía y la vida nocturna en Gangnam"]
];

var pistasLosAngeles = [
    // Fácil
    ["Centro de la industria del entretenimiento en Hollywood", "Ubicada en el estado de California", "Famosa por sus playas y estilo de vida relajado"],
    // Medio
    ["Influencia del cine y la televisión en la cultura", "Epicentro de la música y la moda", "Alberga Hollywood y Beverly Hills"],
    // Difícil
    ["Historia de expansión durante la fiebre del oro", "Centro cultural con el Museo de Arte del Condado de Los Ángeles y el Teatro Walt Disney", "Famosa por su diversidad étnica y la vida nocturna en Sunset Strip"]
];

var pistasChicago = [
    // Fácil
    ["Ciudad arquitectónicamente innovadora", "Ubicada en la costa del lago Míchigan", "Conocida por su arquitectura y escena musical"],
    // Medio
    ["Influencia de la arquitectura moderna y la Escuela de Chicago", "Epicentro cultural y financiero del Medio Oeste", "Alberga el Instituto de Arte de Chicago y el Millennium Park"],
    // Difícil
    ["Historia de la prohibición y la mafia", "Centro cultural con el Museo Field de Historia Natural y la Ópera de Chicago", "Famosa por su arquitectura de rascacielos y la escena teatral en el Loop"
    ]
];

var pistasSaoPaulo = [
    // Fácil
    ["Principal ciudad brasileña y centro financiero", "Famosa por su diversidad cultural y culinaria", "Centro de la escena artística y de diseño en América Latina"],
    // Medio
    ["Influencia de la arquitectura moderna y contemporánea", "Epicentro cultural y de negocios en América del Sur", "Alberga la Avenida Paulista y el Museo de Arte de São Paulo"],
    // Difícil
    ["Historia colonial portuguesa y la independencia de Brasil", "Centro cultural con el Parque Ibirapuera y el Museo de Arte Contemporáneo", "Famosa por su carnaval y la vida nocturna en la calle Augusta"]
];


// Variable para almacenar la ubicación actual de Carmen Sandiego
var ubicacionCarmen;

var tiempo; // Variable para almacenar el tiempo del contador
var timeoutId; // Identificador del contador
var d = 0; // Dificultad de las pistas

// Función que inicia el juego
function iniciarJuego(){
    ubicacionCarmen = randomCity(ciudades); // Seleccionamos una ubicación aleatoria donde Carmen Sandiego se escondera
    tiempo = 20; // Establecemos el tiempo en segundos del contador
    document.getElementById("iniciarButton").disabled = true;
    document.getElementById("ciudadesSelect").disabled = false;
    cuentaAtras(); // Iniciamos la cuenta atras
}

// Función que reinicia el juego
function reiniciarJuego(){
    document.getElementById("ciudadesSelect").value = -1; // Seleccionamos la opcion por defecto del select
    document.getElementById("pista").innerHTML = "¿Necesitas una pista? Pasa el mouse sobre Carmen Sandiego ;D"; // Cambiamos el texto del recuadro de las pistas
    clearTimeout(timeoutId); // Detenemos el temporizador
    iniciarJuego(); // Iniciamos el juego
}

// Función que realiza la cuenta atrás
function cuentaAtras() {
    document.getElementById('cuentaAtras').innerHTML = tiempo;
    if(tiempo == 0){
        document.getElementById("ciudadesSelect").disabled = true;
        document.getElementById('cuentaAtras').innerHTML = "XXXX";
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

// Cambiar dificultad de las pistas
document.getElementById("facil").onclick = function(e){
    d = this.value;
}

document.getElementById("medio").onclick = function(e){
    d = this.value;
}

document.getElementById("dificil").onclick = function(e){
    d = this.value;
}

// Cambiamos el color de boton seleccionado
$('.dificultad').on('click', function(){
    $('.dificultad').removeClass('selected');
    $(this).addClass('selected');
});

// Función que proporciona pistas sobre la ciudad donde se esconde Carmen Sandiego
function pista(){
    let i = Math.round(Math.random() * 2);
    if (tiempo > 0) {
        switch (ciudades.indexOf(ubicacionCarmen)) {
            case 0:
                document.getElementById("pista").innerHTML = pistasNuevaYork[d][i];
                break;
            case 1:
                document.getElementById("pista").innerHTML = pistasLondres[d][i];
                break;
            case 2:
                document.getElementById("pista").innerHTML = pistasParis[d][i];
                break;
            case 3:
                document.getElementById("pista").innerHTML = pistasTokio[d][i];
                break;
            case 4:
                document.getElementById("pista").innerHTML = pistasPekin[d][i];
                break;
            case 5:
                document.getElementById("pista").innerHTML = pistasRoma[d][i];
                break;
            case 6:
                document.getElementById("pista").innerHTML = pistasSidney[d][i];
                break;
            case 7:
                document.getElementById("pista").innerHTML = pistasBerlin[d][i];
                break;
            case 8:
                document.getElementById("pista").innerHTML = pistasMadrid[d][i];
                break;
            case 9:
                document.getElementById("pista").innerHTML = pistasCiudadMexico[d][i];
                break;
            case 10:
                document.getElementById("pista").innerHTML = pistasToronto[d][i];
                break;
            case 11:
                document.getElementById("pista").innerHTML = pistasRioJaneiro[d][i];
                break;
            case 12:
                document.getElementById("pista").innerHTML = pistasEstambul[d][i];
                break;
            case 13:
                document.getElementById("pista").innerHTML = pistasMoscú[d][i];
                break;
            case 14:
                document.getElementById("pista").innerHTML = pistasBangkok[d][i];
                break;
            case 15:
                document.getElementById("pista").innerHTML = pistasDubai[d][i];
                break;
            case 16:
                document.getElementById("pista").innerHTML = pistasSeul[d][i];
                break;
            case 17:
                document.getElementById("pista").innerHTML = pistasLosAngeles[d][i];
                break;
            case 18:
                document.getElementById("pista").innerHTML = pistasChicago[d][i];
                break;
            case 19:
                document.getElementById("pista").innerHTML = pistasSaoPaulo[d][i];
                break;
            default:
                document.getElementById("pista").innerHTML = "Debes iniciar el juego";
        }
    } else {
        document.getElementById("pista").innerHTML = "Debes iniciar el juego";
    }
    
}