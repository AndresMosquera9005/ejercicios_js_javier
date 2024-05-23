let respuesta = document.getElementById("respuesta_pri")

for(i=0; i<= 100; i++){
    if(i % 2 ==0){
        respuesta.innerHTML += i + " " + "Si, es numero primo" + "<br>"
    }else{
        respuesta.innerHTML += i + " " + "No, es numero primo" + "<br>"
    }
}