function iniciar() {
    var s = "CEBRA";
    var s2 = "AbCdEfG";
    var resultado = "";
    resultado = "<p>El carácter en el índice 0 en '" + s + "' es" + s.charAt(0) + "</p>";
    resultado += "<p>El código del carácter en el índice 0 en '" + s + "' es" + s.charAt(0) + "</p>";
    resultado += "<p>'" + String.fromCharCode(72, 79, 76, 65) + "' contiene los códigos de carácteres 72, 79, 76, 65</p>";
    resultado += "<p>'" + s2 + "' en minúsculas es '" + s2.toLowerCase() + "'</p>";
    resultado += "<p>'" + s2 + "' en mayúsculas es '" + s2.toUpperCase() + "'</p>";
    document.getElementById("resultados").innerHTML = resultado;
}
window.addEventListener("load", iniciar, false);