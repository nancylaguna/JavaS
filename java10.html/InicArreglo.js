function iniciar(){
    var n1 = new Array(5);
    var n2 = new Array();
    var longitud = n1.length;
    for (var i=0; i <= n1.length; ++i){
        n1[i] = i;
    }
    for (i=0; i < 5; ++i){
        n2[i] = 1;
    }
    imprimirArreglo("Arreglo n1:", n1, document.getElementById("salida1"));
    imprimirArreglo("Arreglo n2:", n2, document.getElementById("salida2"));
}
function imprimirArreglo(encabezado, elArreglo, salida){
    var contenido = "<h2>" + encabezado + "</h2><table>" + "<thead><th>Indice</th><thead>Valor</thead><tbody>";
    var longitud = elArreglo.length;
    for(var i=0; i < longitud; ++i){
        contenido += "<tr><td>" + i + "</td><td>" + elArreglo[i] + "</td></tr>";
    }
    contenido += "</tbody></table>";
    salida.innerHTML = contenido;
}
window.addEventListener("load", iniciar, false);