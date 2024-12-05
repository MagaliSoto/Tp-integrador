document.addEventListener('DOMContentLoaded', async function () {
    const formContainer = document.querySelector('.main-container');

    try {
        // Solicita el formulario al servidor
        const response = await fetch('http://localhost:3000/cargar-formulario');
        if (!response.ok) {
            throw new Error('Error al cargar el formulario.');
        }

        // Obtiene el html del formulario
        const formHTML = await response.text();

        // Carga el formulario dinámicamente
        formContainer.innerHTML = formHTML;

        document.getElementById('btnAceptar').addEventListener('click', async function (event) {
            event.preventDefault();

            const campos = [
                document.getElementById('txtNombre'),
                document.getElementById('txtImagen'),
                document.getElementById('txtEmail'),
                document.getElementById('txtTelefono'),
                document.getElementById('txtCursoId')
            ];
            
            const [nombre, imagen, email, telefono, cursoId] = campos.map(campo => campo.value);

            if (!nombre || !email || !telefono) {
                alert('Por favor, completa los campos obligatorios.');
                return;
            }

            try {
                const response = await fetch('http://localhost:3000/usuarios', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ nombre, imagen, email, telefono, cursoId })
                });

                if (!response.ok) {
                    throw new Error('Error al enviar los datos.');
                }

                alert('Usuario agregado exitosamente.');
                campos.forEach(campo => campo.value = campo.tagName === 'SELECT' ? "" : "");

            } catch (error) {
                console.error('Error al enviar los datos:', error);
                alert('Error al enviar los datos.');
            }
        });
    } catch (error) {
        console.error('Error al cargar el formulario:', error);
        formContainer.innerHTML = '<p>Error al cargar el formulario.</p>';
    }
});
