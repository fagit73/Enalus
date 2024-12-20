document.addEventListener('DOMContentLoaded', function () {
    const productosCarrito = document.getElementById('cart-container');
    const cuentaCarrito = document.getElementById('cuenta-carrito');
    const cantidadTotal = document.getElementById('cantidad');
    const precioTotal = document.getElementById('precio');
    const carritoVacio = document.getElementById('carrito-vacio');
    const btnReiniciar = document.getElementById('reiniciar');
    const btnComprar = document.getElementById('comprar');

    // Obtenemos los productos del carrito desde localStorage (si existen)
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Función para renderizar los productos en el carrito
    function renderizarCarrito() {
        productosCarrito.innerHTML = ''; // Limpiamos el contenedor

        if (carrito.length === 0) {
            carritoVacio.style.display = 'block';
            productosCarrito.style.display = 'none';
        } else {
            carritoVacio.style.display = 'none';
            productosCarrito.style.display = 'block';

            carrito.forEach(producto => {
                const divProducto = document.createElement('div');
                divProducto.classList.add('card', 'mb-3');
                divProducto.innerHTML = `
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${producto.img}" class="img-fluid rounded-start" alt="${producto.nombre}">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${producto.nombre}</h5>
                                <p class="card-text">Precio: $${producto.precio}</p>
                                <p class="card-text">Cantidad: ${producto.cantidad}</p>
                                <!-- Modificado: Añadido el evento eliminarProducto directamente -->
                                <button class="btn btn-danger" id="eliminar-${producto.id}">Eliminar</button>
                            </div>
                        </div>
                    </div>
                `;
                productosCarrito.appendChild(divProducto);

                // Asignar el evento de eliminar al botón
                document.getElementById(`eliminar-${producto.id}`).addEventListener('click', function() {
                    eliminarProducto(producto.id);
                });
            });
        }

        actualizarTotales();
    }

    // Función para eliminar un producto del carrito
    function eliminarProducto(idProducto) {
        // Filtramos el producto por su id y lo eliminamos
        carrito = carrito.filter(producto => producto.id !== idProducto);
        // Actualizamos el carrito en el localStorage
        localStorage.setItem('carrito', JSON.stringify(carrito));

        // Actualizamos los totales y renderizamos el carrito nuevamente
        actualizarTotales();
        renderizarCarrito();
    }

    // Función para actualizar los totales (cantidad y precio)
    function actualizarTotales() {
        const cantidad = carrito.reduce((total, producto) => total + producto.cantidad, 0);
        const precio = carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);

        cantidadTotal.textContent = cantidad;
        precioTotal.textContent = precio.toFixed(2);
        cuentaCarrito.textContent = cantidad;
    }

    // Función para reiniciar el carrito
    btnReiniciar.addEventListener('click', function() {
        localStorage.removeItem('carrito');
        carrito = [];
        renderizarCarrito();
    });

    // Función para realizar la compra
    btnComprar.addEventListener('click', function() {
        if (carrito.length === 0) {
            alert('Tu carrito está vacío. No puedes comprar.');
        } else {
            alert('Compra realizada con éxito.');
            localStorage.removeItem('carrito');
            carrito = [];
            renderizarCarrito();
        }
    });

    // Renderizamos el carrito al cargar la página
    renderizarCarrito();
});









