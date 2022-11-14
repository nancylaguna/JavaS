var imgIcono;
var imagenes = ["ECP", "TPE", "BPP", "GUI", "REND", "PORT", "OIS"]
var descripciones = ["Error común de programación", "Tip para prevenir errores", "Buena práctica de programación", "Observación de apariencia visual", "Tip de rendimiento", "Tip de portabilidad", "Observación de ingeniería de software"];
function elegirImagen() {
    var indice = Math.floor(Math.random() * 7);
    imgIcono.setAttribute("src", imagenes[indice] + ".png");
    imgIcono.setAttribute("alt", descripciones[indice]);
}
function iniciar() {
    imgIcono = document.getElementById("imagen");
    imgIcono.addEventListener("click", elegirImagen, false);
}
window.addEventListener("load", iniciar, false);