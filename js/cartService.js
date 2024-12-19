const cuentaCarritoElement = document.getElementById("cuenta-carrito");

export function agregarAlCarrito(producto) {
    // Verifica si ya hay un carrito en localStorage
    let memoria = JSON.parse(localStorage.getItem("carrito")) || [];
    
    // Verifica si el producto ya está en el carrito
    const indiceProducto = memoria.findIndex(item => item.id === producto.id);
    
    if (indiceProducto === -1) {
        // Si no está, lo agregamos con cantidad 1
        producto.cantidad = 1;
        memoria.push(producto);
    } else {
        // Si ya está, incrementamos la cantidad
        memoria[indiceProducto].cantidad++;
    }

    // Guardamos el carrito actualizado en localStorage
    localStorage.setItem("carrito", JSON.stringify(memoria));

    // Actualizamos el contador en el header
    actualizarNumeroCarrito();
}

export function actualizarNumeroCarrito() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const totalProductos = carrito.reduce((acumulado, producto) => acumulado + producto.cantidad, 0);
    cuentaCarritoElement.innerText = totalProductos;
}





