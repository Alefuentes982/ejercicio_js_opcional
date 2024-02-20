const boton2 = document.getElementById('btn2');

boton2.addEventListener('click', function () {

    //Entrada

    var celcius = +prompt("ingrese la temperatura en grados Celcius: ");

    //Proceso

    var kelvin = celcius + 273.15
    var fahrenheit = (celcius * 9 / 5) + 32

    //Salida
    alert(`${celcius} grados celcius son equivalentes a ${kelvin} grados kelvin y ${fahrenheit} grados fahrenheit`)
    console.log(`${celcius} grados celcius son equivalentes a ${kelvin} grados kelvin y ${fahrenheit} grados fahrenheit`)
});