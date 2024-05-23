let respuesta = document.getElementById("respuesta_area_poligono")
var cantidad_lados = prompt("Digite el primer numero")
var longitud = prompt("Digite el segundo numero ")

function area_poligono(cantilados, dimenlado) {
    const procedimiento = cantilados * dimenlado
    return procedimiento;
}
const resultado_procedimiento = area_poligono(cantidad_lados,longitud)
respuesta.innerHTML = "Resultado del poligono" + " " + resultado_procedimiento + " " + "mt"
