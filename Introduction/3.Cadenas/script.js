function cadenas() {
    // Obtenemos los datos del formulario del html
    var Nombre = document.getElementById("inputNombre").value;
    var Apellidos = document.getElementById("inputApellidos").value;
    var Edad = document.getElementById("inputEdad").value;
    var Año = document.getElementById("inputAño").value;

    // Texto con comillas simples
    alert('Esto es un frase de ejemplo con comillas simples');
    // Salto de linea
    alert(Nombre + "\n" + Apellidos);
    // Convertir un Strinf en un Integer
    alert(Number(Edad) + Number(Año));
    // Suma de todas las variables independientemente de que sean Strings o Integers
    alert(Nombre + Apellidos + Edad + Año)
}