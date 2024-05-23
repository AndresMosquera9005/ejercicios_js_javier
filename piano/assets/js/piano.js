class TeclaPiano {
    constructor(nota, tecla) {
        this.nota = nota;
        this.tecla = tecla;
        this.elemento = document.createElement('div');
        this.elemento.classList.add('tecla-piano');
        this.elemento.dataset.nota = this.nota;
        this.elemento.innerText = this.tecla;
        this.elemento.addEventListener('click', this.reproducirSonido.bind(this));
    }

    reproducirSonido() {
        let audio = new Audio(`assets/audio/${this.nota}`);
        audio.play();
    }
}

let teclasPiano = [
    new TeclaPiano('nota1.mp3', "j"),
    new TeclaPiano('nota2.mp3', "a"),
    new TeclaPiano('nota3.mp3', "m"),
    new TeclaPiano('nota4.mp3', "r"),
    new TeclaPiano('nota5.mp3', "s"),
    new TeclaPiano('nota6.mp3', "d"),
    new TeclaPiano('nota7.mp3', "f"),
    new TeclaPiano('nota8.mp3', "g"),
];

let pianoContainer = document.querySelector('#piano');
teclasPiano.forEach(tecla => {
    pianoContainer.appendChild(tecla.elemento);
});

document.addEventListener("keydown", function(event){
    let accion = teclasPiano.fin(letraPiano => letraPiano.tecla === event.key)
})


