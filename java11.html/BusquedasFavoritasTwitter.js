var etiquetas;
function cargarBusquedas() {
    if(!window.sessionStorage.getItem("aquiPreviamente"))
    {
        sessionStorage.setItem("aquiPreviamente", "true");
        document.getElementById("mensajeBienvenida").innerHTML = "Bienvenido a la App de Búsquedas favoritas de Twitter";
    }
    var longitud = localStorage.length;
    etiquetas = [];
    for(var i = 0; i < longitud; ++i){
        etiquetas[i] = localStorage.key(i);
    }
    etiquetas.sort();
    var marcado = "<ul>";
    var url = "http://twitter.com/search?q=";
    for(var etiqueta in etiquetas){
        var consulta = url + localStorage.getItem(etiquetas[etiqueta]);
        marcado += "<li><span><a href = '" + consulta + "'>" + etiquetas[etiqueta] + "</a></span>" + "<input id = '" + etiquetas[etiqueta] + "' type = 'button'" + "value = 'Editar' onclick = 'editarEtiqueta(id)'>" + 
        "<input id = '" + etiquetas[etiqueta] + "'type = 'button'" + "value = 'Eliminar' onclick = 'eliminarEtiqueta(id)'>";
    }
    marcado += "</ul>";
    document.getElementById("busquedas").innerHTML = marcado;
}
function borrarTodasLasBusquedas() {
    localStorage.clear();
    cargarBusquedas();
}
function guardarBusqueda() {
    var consulta = document.getElementByld("consulta");
    var etiqueta = document.getElementById("etiqueta");
    localStorage.setItem(etiqueta.value, consulta.value);
    etiqueta.value = "";
    consulta.value = ""; 
    cargarBusquedas(); 
}
function eliminarEtiqueta (etiqueta ){
    localStorage.removeItem(etiqueta);
    cargarBusquedas();
} 

function editarEtiqueta(etiqueta){
    document.getElementById("consulta").value = localStorage[etiqueta];
    document.getElementById("etiqueta").value = etiqueta;
    cargarBusquedas(); 
} 
function Iniciar(){
    var botonCuardar = document.getElementById( "botonCuardar" );
    botonCuardar .addEventListener("click", guardarBusqueda, false);
    var botonBorrar = document.getElementByld("botonBorrar");
    botonBorrar.addEventListener("click", borrarTodasLasBusquedas, false);
    cargarBusquedas(); 
}
window.addEventListener( "load", iniciar, false);