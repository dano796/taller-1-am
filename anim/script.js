// Elementos
const sol = document.getElementById("sol");
const bici = document.getElementById("bici");
const nube = document.getElementById("nube");
const btnIniciar = document.getElementById("btnIniciar");

// Audio
const sonidoAmbiente = new Howl({
    src: ['audio/ambiente.mp3'],
    volume: 0.3,
});

const sonidoBici = new Howl({
    src: ['audio/bici.mp3'],
    volume: 0.5,
});

// Crear las animaciones pausadas, porque el navegador
// no permite reproducir audio sin interacción del usuario

//En gsap hay from, to y fromTo
// from: define el estado inicial y anima al estado actual
// to: define el estado final y anima desde el estado actual
// fromTo: define ambos estados y anima entre ellos

const animacionSol = gsap.from(sol, {
    y: 300,
    opacity: 0.5,
    duration: 4,
    ease: "power2.out",
    paused: true
});

const animacionBici = gsap.to(bici, {
    x: 700,
    duration: 10,
    ease: "linear",
    paused: true,

    onComplete: function () {
        sonidoBici.stop();
        sonidoAmbiente.stop();
    }

});

const animacionNube = gsap.to(nube, {
    x: 800,
    duration: 10,
    ease: "linear",
    paused: true
});

// Botón de inicio para activar animaciones y sonidos
btnIniciar.addEventListener("click", function () {
    sonidoBici.play();
    sonidoAmbiente.play();
    animacionSol.play();
    animacionBici.play();
    animacionNube.play();
    btnIniciar.style.display = "none";
});

