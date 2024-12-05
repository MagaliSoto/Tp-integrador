document.addEventListener("DOMContentLoaded", async () => {
    const productGrid = document.getElementById('product-grid');

    try {
        const response = await fetch('http://localhost:3000/usuarios');
        console.log('Respuesta del servidor:', response);

        if (!response.ok) {
            throw new Error(`Error en la respuesta del servidor: ${response.status}`);
        }

        const usuarios = await response.json();
        mostrarUsuarios(usuarios);
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
    }

    productGrid.addEventListener('click', (event) => {
        if (event.target.classList.contains('botonUsuario')) {
            const id = event.target.dataset.id;
            const action = event.target.dataset.action;

            if (action === 'modificar') {
                window.location.href = `modificarUsuarios.html?id=${id}`;
            }
        }
    });
});

function mostrarUsuarios(usuarios) {
    if (!Array.isArray(usuarios)) {
        console.error('El valor de usuarios no es un array:', usuarios);
        return;
    }

    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = "";

    usuarios.forEach(usuario => {
        const { id, nombre, cursoId, imagen } = usuario;
        const foto = imagen ? imagen : "img/userNotFound.jpg";

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <img src="${foto}" alt="${nombre}">
            <h3>${nombre}</h3>
            ${cursoId ? `<p>${cursoId}</p>` : `<button class="botonUsuario" data-id="${id}" data-action="agregarCurso">Agregar Curso</button>`}
            <button class="botonUsuario" data-id="${id}" data-action="modificar">Modificar</button>
        `;

        productGrid.appendChild(productCard);
    });
}
