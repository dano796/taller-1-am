window.onload = init;

let claveInput;
let teclas;
let botonBorrar;
let valoresOriginales = [];

function init() {
  // Obtener elementos del html
  claveInput = document.querySelector(".clave");
  teclas = document.querySelectorAll(".tecla:not(.borrar)");
  botonBorrar = document.querySelector(".borrar");

  // Ingreso de clave similar al de Bancolombia
  // Mezclar los números aleatoriamente
  let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  numeros.sort(() => Math.random() - 0.5);

  // Asignar un número a cada tecla
  teclas.forEach((tecla, index) => {
    tecla.value = numeros[index];
    tecla.setAttribute("valor-real", numeros[index]);
    valoresOriginales.push(numeros[index]);
  });

  // Agregar eventos de click a las teclas
  teclas.forEach((tecla) => {
    tecla.addEventListener("click", agregarDigito);
  });

  // Agregar evento al botón borrar
  botonBorrar.addEventListener("click", borrarUltimo);

  // Agregar eventos de hover a las teclas numéricas
  teclas.forEach((tecla) => {
    tecla.addEventListener("mouseenter", ocultarNumeros);
    tecla.addEventListener("mouseleave", mostrarNumeros);
  });
}

// Función que se ejecuta cuando se hace click en una tecla numérica
function agregarDigito(event) {
  const valor = event.target.getAttribute("valor-real");
  claveInput.value += valor;
}

// Función para borrar el último dígito
function borrarUltimo() {
  claveInput.value = claveInput.value.slice(0, -1);
}

// Función para ocultar todos los números y mostrar asteriscos
function ocultarNumeros() {
  teclas.forEach((tecla) => {
    tecla.value = "*";
  });
}

// Función para restaurar los números originales
function mostrarNumeros() {
  teclas.forEach((tecla, index) => {
    tecla.value = valoresOriginales[index];
  });
}
