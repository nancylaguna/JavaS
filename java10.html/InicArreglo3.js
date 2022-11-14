function iniciar() {
    var arreglo1 = [[1, 2, 3],
    [4, 5, 6,]];
    var arrglo2 = [[1, 2], [3], [4, 5, 6]];
    imprimirArreglo("Valores en arreglo1 por fila", arreglo1, document.getElementById("salida1"));
    imprimirArreglo("Valores en arreglo2 por fila", arreglo2, document.getElementById("salida2"));
}
function imprimirArreglo(encabezado, elArreglo, salida) {
    var resultados = "";
    for (var fila in elArreglo) {
        resultados += "<ol>";
        for (var columna in elArreglo[fila]) {
            resultados += "<li>" + elArreglo[fila][columna] + "</li>";
        }
        resultados += "</ol>";
    }
    salida.innerHTML = resultados;
}
window.addEventListener("load", iniciar, false);