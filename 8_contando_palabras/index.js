const btn_solucion = document.getElementById("btn_cant_let")
let mostrar_respuesta = document.getElementById("respuesta")

btn_solucion.addEventListener("click", function(){
    let conteo_letras = document.getElementById("input-texto").value
    let resultado = conteo_letras.length
    mostrar_respuesta.innerHTML = conteo_letras + " " + " = " + " " + resultado
})

