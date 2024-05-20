let respuesta = document.getElementById("repuesta")

for (i= 1; i <= 50; i++) {

    if (i % 3 == 0 ) {
        respuesta.innerHTML += i + " " + "=" + " " +  "FIZZ" + "<br>"
    }
    if (i % 5 == 0) {
        respuesta.innerHTML += i + " " +"=" + " " + "BUZZ" + "<br>"
    }
    if (i % 5 == 0 && i % 3 == 0 ) {
        respuesta.innerHTML += i + " " + "=" + " " +  "FIZZ-BUZZ" + "<br>"
    }    
}


