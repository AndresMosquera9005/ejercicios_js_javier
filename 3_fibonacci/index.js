let respuesta = document.getElementById("respuesta")

function fibonacci(a,b,c,d) {
    const paso_fibonacci = (a*(b+c))/d
    return paso_fibonacci;
}
const resultado = fibonacci(100,100,1,2)
console.log(resultado);
respuesta.innerHTML ="Resultado:" +" " + resultado


