let nombre_valuar = document.getElementById("input-nombre").value
let btn_alrevez = document.getElementById("btn-convertir")
let nombre_rever = document.getElementById("solucion_inver")

function reverseString(nombre_valuar) {
    return nombre_valuar.split('').reverse().join('');
}

const nombre_original = "Hola andru!";
const nombre_alrevez = reverseString(nombre_original);
console.log(nombre_alrevez);