/**

// Crear las tarjetas de productos en el carrito
function crearTarjetasProductosCarrito() {
  contenedorTarjetas.innerHTML = "";
  const productos = JSON.parse(localStorage.getItem("helados"));  // Cambiar a "helados"
  if (productos && productos.length > 0) {
    productos.forEach((producto) => {
      const nuevaTarjeta = document.createElement("div");
      nuevaTarjeta.classList = "tarjeta-producto";
      nuevaTarjeta.innerHTML = `
        <img src="${producto.img}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <span>$${producto.precio}</span>
        <div>
          <button>-</button>
          <span class="cantidad">${producto.cantidad}</span>
          <button>+</button>
        </div>
      `;
      contenedorTarjetas.appendChild(nuevaTarjeta);
      
      // Botón "-" para disminuir la cantidad
      nuevaTarjeta.getElementsByTagName("button")[0].addEventListener("click", () => {
        const cantidadElement = nuevaTarjeta.querySelector(".cantidad");
        cantidadElement.innerText = restarAlCarrito(producto);
        crearTarjetasProductosCarrito();
        actualizarTotales();
      });
      
      // Botón "+" para aumentar la cantidad
      nuevaTarjeta.getElementsByTagName("button")[1].addEventListener("click", () => {
        const cantidadElement = nuevaTarjeta.querySelector(".cantidad");
        cantidadElement.innerText = agregarAlCarrito(producto);
        actualizarTotales();
      });
    });
  }
  revisarMensajeVacio();
  actualizarTotales();
  actualizarNumeroCarrito();
}


**/






