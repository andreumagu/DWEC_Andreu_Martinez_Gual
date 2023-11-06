

function Suma(num1, num2) {
    r = Number(num1) + Number(num2);
    return r;
}

function Resta(num1, num2) {
    r = Number(num1) - Number(num2);
    return r;
}

function Multiplicacion(num1, num2) {
    r = Number(num1) * Number(num2);
    return r;
}

function Division(num1, num2) {
    r = Number(num1) / Number(num2);
    return r;
}

function Operaciones() {
    num1 = document.getElementById("inputNum1").value;
    num2 = document.getElementById("inputNum2").value;
    document.getElementById("suma").innerHTML = Suma(num1, num2);
    document.getElementById("resta").innerHTML = Resta(num1, num2);
    document.getElementById("multi").innerHTML = Multiplicacion(num1, num2);
    document.getElementById("divi").innerHTML = Division(num1, num2);
}
