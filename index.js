
// modificación funcion suma - tres parámetros
function suma(num1, num2, num3) {
    let res;
    let suma = num1+num2+num3;
    res = suma
    return res;
}

function resta(num1, num2) {
    let res;
    let resta = num1-num2;
    res = resta;
    return res;
}

function multiplicar(num1,num2) {
    let res;
    let multiplicar = num1*num2;
    res = multiplicar;
    return res;
}

function dividir(num1,num2) {
    let res;
    let dividir = num1/num2;
    res = dividir;
    return res;
}

//exportación de funciones
module.exports = {suma, resta, multiplicar, dividir};