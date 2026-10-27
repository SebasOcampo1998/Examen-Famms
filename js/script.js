
const botonBuscar = document.querySelector("#botonBuscar");

botonBuscar.addEventListener("click", function() {
  let producto = prompt("¿Qué producto buscas?");

  if (producto) {
    alert("Buscaste: " + producto);
  }
});

let cantidadCarrito = 0;

const botonesCarrito = document.querySelectorAll(".products__button");
const contadorCarrito = document.querySelector("#contadorCarrito");

botonesCarrito.forEach(function(boton) {
  boton.addEventListener("click", function() {
    cantidadCarrito = cantidadCarrito + 1;
    contadorCarrito.textContent = cantidadCarrito;

    alert("Producto agregado al carrito");
  });
});
