const boton1 = document.getElementById('btn1');

boton1.addEventListener('click', function () {

    //Entrada

    var num1 = +prompt("ingrese el primer numero: ");
    var num2 = +prompt("ingrese el segundo numero: ");

    //Proceso

    var operacion = prompt("Escoja una operacion (+, -, *, /, %)");

    if (operacion == "+") {
        var resultado = num1 + num2;
    } else if (operacion == "-") {
        var resultado = num1 - num2;
    } else if (operacion == "*") {
        var resultado = num1 * num2
    } else if (operacion == "/") {
        var resultado = num1 / num2;
    } else if (operacion == "%") {
        var resultado = num1 % num2;
    } else {
        console.log("Ha seleccionado una operacion invalida");
        alert("Ha seleccionado una operacion invalida!!");
    }


    //Salida

    console.log("El resultado es: ", resultado);
    alert(`El resultado es: ${resultado}`);

});
