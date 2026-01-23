// Seleccionar los enlaces del menú
const enlaces = document.querySelectorAll(".encabezado-pagina ul a");

// Agregar el evento click a cada enlace para activar el scroll
for (const enlace of enlaces) {
  enlace.addEventListener("click", handleClick);
}

// Función para manejar el scroll hacia una subsección
function handleClick(e) {
  // Evitar el comportamiento por defecto del enlace
  e.preventDefault();

  // Obtener el destino (#id)
  const idDestino = this.getAttribute("href");
  // Buscar la sección destino
  const seccionDestino = document.querySelector(idDestino);
  // Obtener la posición superior de la sección destino
  const posicionSuperior = seccionDestino.offsetTop;

  // Scroll suave hasta la sección destino, ajustando por la altura del encabezado
  window.scrollTo({
    top:
      posicionSuperior -
      document.querySelector(".encabezado-pagina").offsetHeight,
    behavior: "smooth",
  });
}
