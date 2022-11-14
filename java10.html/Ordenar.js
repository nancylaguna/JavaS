function iniciar() {
    var a = [10, 1, 9, 2, 8, 3, 7, 4, 6, 5];
    imprimirArreglo("Elementos de datos en el orden original: ", a, document.getElementById("arregloOriginal"));
    a.sort(compararEnteros);
    imprimirArreglo("Elementos de datos en orden ascendente: ", a, document.getElementById("arregloOrdenado"));
}
function imprimirArreglo(encabezado, elArreglo, salida) {
    salida.innerHTML = encabezado + elArreglo.join(" ");
}
function compararElementos(valor1, valor2) {
    return parseInt(valor1) - parseInt(valor2);
}
window.addEventListener("load", iniciar, false);