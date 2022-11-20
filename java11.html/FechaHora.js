function iniciar() {
    var actual = new Date();
    document.getElementById("cadenas").innerHTML = "<p>toString: " + actual.toString() + "</p>" + "<p>toLocaleString: " + actual.toLocaleString() + "</p>" + "<p>toUTCString: " + actual.toUTCString() + "</p>" + "<p>ValueOf: " + actual.valueOf() + "</p>";

    document.getElementByld("metodosGet").innerHTML =
    "<p>getDate: " + actual.getDate() + "</p>" +
    "<p>getDay: " + actual.getDay() + "</p>" +
    "<p>getMonth: " + actual.getMonth() + "</p>" +
    "<p>getFullYear: " + actual.getFullYear() + "</p>" +




    "<p>getTime: " + actual.getTime() + "</p>" +
    "<p>getHours: " + actual.getHours() + "</p>" +
    "<p>getMinutes: " + actual.getMinutes() + "</p>" +
    "<p>getSeconds: " + actual.getSeconds() + "</p>" +
    "<p>getMilliseconds: " + actual.getMilliseconds() + "</p>" +
    "<p>getTimezoneOffset: " + actual.getTimezoneOffset() + "</p>";
    var otraFecha = new Date( 2011, 2, 18, 1, 5, 0 , 0 );
    document.getElementByld("nuevosArgumentos").innerHTML =
    "<p>Date: " + otraFecha + "</p>";
    otraFecha.setDate(31);
    otraFecha.setMonth(11);
    otraFecha.setFullYear(2011);
    otraFecha.setHours(23);
    otraFecha.setMinutes(S9);
    otraFecha.setSeconds(S9);
    document.getElementByld("metodosSet").innerHTML =
    "<p>Fecha modificada: " + otraFecha + "</p>";
} 
window.addEventListener("load", iniciar, false);