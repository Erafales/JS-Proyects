var num1;
var num2;
var operador;
var resultado;

function ObtenerNumero(numero){
    if (num1 == null) {
        num1 = numero;
        console.log('Valor num1:' + num1);
    } else {
        num2 = numero;
        console.log('Valor num2:' + num2);
    }
    Magic(num1, num2, operador);
}
function ObtenerOperador(sign){
    console.log(sign);
    if (sign == "="){
        document.getElementById('print-result').innerText=(resultado);
    } else {
        operador = sign;
        console.log('Valor operador:' + operador);
    }
}

function Magic(num1, num2, operador){
    console.log(operador);
    switch (operador) {
        case '+': 
            resultado = num1 + num2;
            console.log(resultado);
              C();
            break;
        case '-': 
            resultado = num1 - num2;
            console.log(resultado);
            C();
            break;
    }
}
function C(){
    if (num1 != null && num2 != null){
        num1 = null;
        num2 = null;
    } else {}
}