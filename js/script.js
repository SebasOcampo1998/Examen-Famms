
const botonBuscar = document.querySelector("#botonBuscar");

botonBuscar.addEventListener("click", function() {
  let producto = prompt("¿Qué producto buscas?");

  if (producto) {
    alert("Buscaste: " + producto);
  }
});
