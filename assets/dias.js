const boton3 = document.getElementById('btn3');

boton3.addEventListener('click', function () {
    //Entrada
    var d = +prompt("ingrese una cantidad de dias: ");
    //Proceso
    var años = Math.floor(d / 365)
    var mod = d % 365
    var semanas = Math.floor(mod / 7)
    var dias = mod % 7
    //Salida
    console.log(`El total equivalente a los ${d} dias ingresados en dias es: ${años} año(s), ${semanas} semana(s) y ${dias} dia(s)`)
    alert(`El total equivalente a los ${d} dias ingresados en dias es: ${años} año(s), ${semanas} semana(s) y ${dias} dia(s)`)
});