# Carmen Sandiego

## Abrir Aplicación Web

Abre en tu navegador el archivo index.html.

## Funciones extra

### Distancia entre ciudades

Para saber el distancia entre dos ciudades debemos saber sus latitudes y longitudes. Por eso el array de ciudades esto de objetos con: Nombre, latitud y longitud. (Línea 2)

La función calcularDistancia() se encarga de calcular la distancia en kilometros entre la ciudad seleccionada y la cuidad donde se encuentra Carmen Sandiego y la retorna. (Línea 281)

### Elegir dificultad

Para poder añadir niveles de dificultad he hecho arrays bidimensionales donde cada array esta compueste de tres array uno para cada nivel de pistas (fácil, medio y difícil). (De línea 26 a 208)

He difinido una variable llamada "d" con valor 0, el cual hace referencia al nivel fácil de difucultad. Eso quiere decir que la dificultad predeterminada del juego es la dificultad fácil (Línea 216). El valor 1 es la dificultad media y el 2 la difícil.

La función pista() se encarga de pintar la pista sengún la dificultad seleccionada por el usuario (De línea 314 a 324) y segun el valor aleatorio que se obtienido por la variable "i" (Línea 335).
