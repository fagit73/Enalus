import { agregarAlCarrito } from './cartService.js';

document.addEventListener("DOMContentLoaded", () => {
    cargarProductos();
});

const cargarProductos = async () => {
    try {
        const respuesta = await fetch("../js/helados.json");

        if (!respuesta.ok) {
            throw new Error('No se pudo cargar el archivo JSON');
        }

        const productos = await respuesta.json();
        console.log("Productos cargados:", productos);

        renderizarProductos(productos);
    } catch (error) {
        console.error("Error al cargar los productos:", error);
    }
};

const renderizarProductos = (productos) => {
    const contenedor = document.getElementById("productos-container");
    if (!contenedor) return;

    productos.forEach((producto) => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("producto-card");

        const contenido = `
            <img src="${producto.img}" alt="${producto.nombre}">
            <h2>${producto.nombre}</h2>
            <p>Precio: $${producto.precio}</p>
            <button class="agregar-btn">Agregar al carrito</button>
        `;

        tarjeta.innerHTML = contenido;

        const btnAgregar = tarjeta.querySelector(".agregar-btn");
        btnAgregar.addEventListener('click', () => {
            agregarAlCarrito(producto);
            console.log("Producto agregado:", producto);
        });

        contenedor.appendChild(tarjeta);
    });
};











