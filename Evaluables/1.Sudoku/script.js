// Difinimos los arrays(filas) del sudoku
var f1 = [4,1,3,8,2,5,6,7,9]
var f2 = [5,6,7,1,4,9,8,3,2]
var f3 = [2,8,9,7,3,6,1,4,5]
var f4 = [1,9,5,4,6,2,7,8,3]
var f5 = [7,2,6,9,8,3,5,1,4]
var f6 = [3,4,8,5,1,7,2,9,6]
var f7 = [8,5,1,6,9,4,3,2,7]
var f8 = [9,7,2,3,5,8,4,6,1]
var f9 = [6,3,4,2,7,1,9,5,8]

// Creamos el array multidimensional formado por los 9 arrays(filas) anteriores
var elmeuVectorBi = [f1,f2,f3,f4,f5,f6,f7,f8,f9]

// Funcion que verifica si el sudoku es correcto
function esSudokuCorrecte(elmeuVectorBi){
    estadoFila = true; // La variable estadoFila almacena un booleano que determina si el sudocu es correcto
    for (let i = 0; i < elmeuVectorBi.length; i++) { // Buble for que recorre todos los arrays del array multidimensional
        if (estadoFila == true) { // Si estadoFila == true entonces entra
            var valFila = 0; // Inicializamos el valor de cada fila en 0
            for (let h = 0; h < elmeuVectorBi.length; h++) { // Buble for que recorre todos los elementos de cada array(fila) del array multidimensional
                valFila = valFila + Number(elmeuVectorBi[i][h]); // Incrementa a "valFila" el valor de la posicion que estamos en ese momento
            }
            if (valFila != (45)) { // Si el resulado no es 45, "estadoFila" sera false. En caso de que sea 45 "estadoFila" sera true
                estadoFila = false;
            }else{
                estadoFila = true;
            }
        }else{
            i = (elmeuVectorBi.length + 1); // i se iguala a la longitud del array mas 1 para que el bucle for no siga
        }
        
    }

    estadoCol = true; // La variable estadoCol almacena un booleano que determina si el sudocu es correcto
    // Buble for que recorre todos los arrays del array multidimensional
    for (let i = 0; i < elmeuVectorBi.length; i++) { // Buble for que recorre todos los arrays del array multidimensional
        if (estadoCol == true) { // Si estadoCol == true entonces entra
            var valCol = 0; // Inicializamos el valor de cada columna en 0
            for (let h = 0; h < elmeuVectorBi.length; h++) { // Buble for que recorre todos los elementos de cada array(fila) del array multidimensional
                valCol = valCol + Number(elmeuVectorBi[h][i]); // Incrementa a "valCol" el valor de la posicion que estamos en ese momento
            }
            if (valCol != (45)) { // Si el resulado no es 45, "estadoCol" sera false. En caso de que sea 45 "estadoCol" sera true
                estadoCol = false;
            }else{
                estadoCol = true;
            }
        }else{
            i = (elmeuVectorBi.length + 1); // i se iguala a la longitud del array mas 1 para que el bucle for no siga
        }
    }

    // Inicializamos el valor del estado general de los dos estados anteriores en false
    estado = false;

    if (estadoFila == true && estadoCol == true) { // Si los los estados son true entonces estado será true
        estado = true;
    }

    return estado; // Retornamos el estado. Si es true el Sudoku es correcto, sino no

}

document.getElementById("contenedor").innerHTML = esSudokuCorrecte(elmeuVectorBi); // Imprimimos el retorno de la funcion esSudokuCorrecte()