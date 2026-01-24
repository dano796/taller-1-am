// Seleccionar los elementos del DOM
const campoTexto = document.getElementById("campoTexto");
const contador = document.getElementById("contador");

// Agregar el evento input al campo de texto
campoTexto.addEventListener("input", function () {
  // Obtener la cantidad de caracteres ingresados
  const cantidad = campoTexto.value.length;
  // Actualizar el contador
  contador.textContent = "Caracteres: " + cantidad;
});
