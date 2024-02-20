const boton4 = document.getElementById('btn4');

boton4.addEventListener('click', function () {

    alert("A continuacion se solicitara ingresar 5 numeros, uno a la vez")
    var numero = 0;

    for (var i = 1; i <= 5; i++) {
        numero += +prompt(`numero #${i} ingrese valor numerico: `);
    }

    alert(`La suma de todos lso numeros es: ${numero} y el promedio es ${numero / (i - 1)}`);
    console.log(`La suma de todos lso numeros es: ${numero} y el promedio es ${numero / (i - 1)}`);

});