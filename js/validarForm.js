document.getElementById('miFormulario').addEventListener('submit', function(event) {
    // Prevenir envío por defecto
    event.preventDefault();

    // Variables de los campos
    const nombre = document.getElementById('name').value.trim();
    const telefono = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('formMessage');

    // Limpiar mensajes previos
    limpiarErrores();
    formMessage.style.display = 'none';

    // Validaciones
    let esValido = true;

    if (nombre === '') {
        mostrarError('Por favor, ingresa tu nombre.', 'name');
        esValido = false;
    }

    if (!validarTelefono(telefono)) {
        mostrarError('Por favor, ingresa un número de teléfono válido.', 'phone');
        esValido = false;
    }

    if (!validarEmail(email)) {
        mostrarError('Por favor, ingresa un correo electrónico válido.', 'email');
        esValido = false;
    }

    if (mensaje === '') {
        mostrarError('Por favor, escribe un mensaje.', 'message');
        esValido = false;
    }

    // Si todo es válido, mostrar mensaje de éxito
    if (esValido) {
        formMessage.style.display = 'block';
        formMessage.textContent = 'El formulario ha sido enviado con éxito.';
        // Enviar formulario tras un breve retraso
        setTimeout(() => this.submit(), 1000);
    }
});

// Función para mostrar errores
function mostrarError(mensaje, campoId) {
    const campo = document.getElementById(campoId);
    campo.classList.add('error');
    alert(mensaje); // Mostrar alerta
}

// Función para limpiar errores
function limpiarErrores() {
    document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
}

// Validación de teléfono
function validarTelefono(telefono) {
    const regex = /^[0-9]{7,15}$/; // Acepta entre 7 y 15 dígitos
    return regex.test(telefono);
}

// Validación de email
function validarEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}









