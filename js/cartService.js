let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Función para agregar producto al carrito
function agregarAlCarrito(producto) {
    const index = carrito.findIndex(item => item.id === producto.id);
    
    if (index !== -1) {
        carrito[index].cantidad += 1; // Incrementar cantidad si ya existe en el carrito
    } else {
        producto.cantidad = 1;
        carrito.push(producto);
    }

    actualizarCarrito();
}

// Actualizar el almacenamiento local y la cantidad del carrito visible
function actualizarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCantidadEnInterfaz();
}

// Función para obtener la cantidad total de productos en el carrito
function obtenerCantidadTotal() {
    return carrito.reduce((total, producto) => total + producto.cantidad, 0);
}

// Actualizar la cantidad en la interfaz
function actualizarCantidadEnInterfaz() {
    const cuentaCarrito = document.getElementById('cuenta-carrito');
    if (cuentaCarrito) {
        cuentaCarrito.textContent = obtenerCantidadTotal();
    }
}

// Función para recuperar el carrito completo
function obtenerCarrito() {
    return carrito;
}

// Al inicializar la página, actualizamos la cantidad del carrito
document.addEventListener('DOMContentLoaded', actualizarCantidadEnInterfaz);

export { agregarAlCarrito, obtenerCarrito };
