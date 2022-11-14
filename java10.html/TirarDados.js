var frecuencia = [, 0, 0, 0, 0, 0, 0];
var totalDados = 0;
var imagenesDado = new Array(12);
function iniciar(){
    var boton = document.getElementById("botonTirar");
    var longitud = imagenesDado.length;
    for(var i = 0 ; i < longitud; ++i){
        imagenesDado[i] = document.getElementById("dado" + (i + 1));
    }
}
function tirarDados(){
    var cara;
    var longitud = imagenesDado.length;
    for(var i = 0; i < longitud; ++i){
        cara = Math.floor(1 + Math.random() * 6);
        calcularTiros(cara);
        establecerImagen(i, cara);
        ++totalDados;
    }
    actualizarTablaFrecuencias();
}
function calcularTiros(cara){
    ++frecuencia[cara];
}
function establecerImagen(numeroDado, cara){
    imagenesDado[numeroDado].setAttribute("src", "dado" + cara + ".png");
    imagenesDado[numeroDado].setAttribute("alt", "dado con " + cara + " punto(s)");
}
function actualizarTablaFrecuencias(){
    var resultados = "<table><caption>Frecuencias de tiro de dado</caption>" + "<thead><th>Cara</th><th>Frecuencia</th>" + "<th>Porcentaje</th></thead><tbody>";
    var longitud = freciencia.length;
    for(var i = 1; i < longitud; ++i){
        resultados += "<tr><td>1</td><td>" + frecuencia[i] + "</th><td>" + formatoPorciento(frecuencia[i] / totalDados) + "</td></tr>";
    }
    resultados += "</tbody></table>";
    document.getElementById("divTablaFrecuencias").innerHTML = resultados;
}
function formatoPorciento(valor){
    valor *= 100;
    return valor.toFixed(2);
}
window.addEventListener("load", iniciar, false);