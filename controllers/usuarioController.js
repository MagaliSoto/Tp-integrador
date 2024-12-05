const Usuario = require('../models/usuario');

// Mostrar los usuarios
exports.mostrarUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.status(200).json(usuarios);
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
        res.status(500).json({ mensaje: 'Error al obtener los usuarios.' });
    }
};

// Agregar un nuevo usuario
exports.agregarUsuario = async (req, res) => {
    const { nombre, imagen, email, telefono, cursoId } = req.body;

    if (!nombre || !email || !telefono) {
        return res.status(400).json({ mensaje: 'Los campos nombre, email y telefono son obligatorios.' });
    }
    
    try {
        const nuevoUsuario = await Usuario.create({
            nombre,
            imagen,
            email,
            telefono,
            cursoId,
        });

        res.status(201).json({ mensaje: 'Usuario agregado exitosamente.', usuario: nuevoUsuario });
    } catch (error) {
        console.error('Error al agregar el usuario:', error);
        res.status(500).json({ mensaje: 'Error al agregar el usuario.', error: error.message });
    }
};

// Actualizar un usuario
exports.actualizarUsuario = async (req, res) => {
    const { id } = req.params;
    const { nombre, email, telefono, imagen, cursoId } = req.body;
    try {
        const usuario = await Usuario.findByPk(id);
        if (!usuario) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
        await usuario.update({ nombre, email, telefono, imagen, cursoId });
        res.status(200).json({ mensaje: 'Usuario actualizado exitosamente', usuario });
    } catch (error) {
        console.error('Error al actualizar el usuario:', error);
        res.status(500).json({ mensaje: 'Error al actualizar el usuario' });
    }
};

// Eliminar un usuario
exports.eliminarUsuario = async (req, res) => {
    const { id } = req.params;
    try {
        const usuario = await Usuario.findByPk(id);
        if (!usuario) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
        await usuario.destroy();
        res.status(200).json({ mensaje: 'Usuario eliminado exitosamente' });
    } catch (error) {
        console.error('Error al eliminar el usuario:', error);
        res.status(500).json({ mensaje: 'Error al eliminar el usuario' });
    }
};
