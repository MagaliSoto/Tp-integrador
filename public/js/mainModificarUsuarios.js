document.addEventListener("DOMContentLoaded", async () => {
    const formContainer = document.getElementById('form-container');

    // Obtiene el Id
    const params = new URLSearchParams(window.location.search);
    const usuarioId = params.get('id');

    if (!usuarioId) {
        formContainer.innerHTML = '<p>Error: No se proporcionó un ID de usuario.</p>';
        return;
    }

    try {
        const response = await fetch(`http://localhost:3000/editar-usuario/${usuarioId}`);
        if (!response.ok) {
            throw new Error('Error al cargar los datos del usuario');
        }

        // Inserta el formulario en el contenedor
        const formHTML = await response.text();
        formContainer.innerHTML = formHTML;

        const form = document.getElementById('registroForm');
        form.addEventListener('submit', async (event) => {
            event.preventDefault();

            const nombre = document.getElementById('txtNombre').value;
            const imagen = document.getElementById('txtImagen').value;
            const email = document.getElementById('txtEmail').value;
            const telefono = document.getElementById('txtTelefono').value;
            const cursoId = document.getElementById('txtCursoId').value;
            
            try {
                const updateResponse = await fetch(`http://localhost:3000/usuarios/${usuarioId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ nombre, imagen, email, telefono, cursoId })
                });

                if (!updateResponse.ok) {
                    throw new Error('Error al actualizar el usuario');
                }

                alert('Usuario actualizado con éxito');
                window.location.href = 'vistaUsuarios.html';
            } catch (error) {
                console.error('Error al actualizar el usuario:', error);
                alert('Error al actualizar el usuario');
            }
        });

        document.getElementById('btnEliminar').addEventListener('click', async function (event) {
            event.preventDefault();

            const nombre = document.getElementById('txtNombre').value;
            const imagen = document.getElementById('txtImagen').value;
            const email = document.getElementById('txtEmail').value;
            const telefono = document.getElementById('txtTelefono').value;
            const cursoId = document.getElementById('txtCursoId').value;
            
            try {
                const updateResponse = await fetch(`http://localhost:3000/usuarios/${usuarioId}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ nombre, imagen, email, telefono, cursoId })
                });

                if (!updateResponse.ok) {
                    throw new Error('Error al eliminar el usuario');
                }

                alert('Usuario eliminado con éxito');
                window.location.href = 'vistaUsuarios.html';
            } catch (error) {
                console.error('Error al eliminar el usuario:', error);
                alert('Error al eliminar el usuario');
            }
        });
    } catch (error) {
        console.error('Error al cargar el formulario:', error);
        formContainer.innerHTML = '<p>Error al cargar el formulario.</p>';
    }
});
