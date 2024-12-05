const express = require('express');
const app = express();
const sequelize = require('./config/database');
const cors = require('cors');
const usuariosRoutes = require('./routes/usuario');

// Modelo de ejemplo
const Usuario = require('./models/usuario');

// Middleware
app.use(express.json());
app.use(cors());
app.use('/usuarios', usuariosRoutes);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/cargar-formulario', (req, res) => {
    res.render('formulario', {
        titulo: 'Agregar Usuario',
        cursoOptions: ['Curso 1', 'Curso 2', 'Curso 3', 'Curso 4'],
        usuario: null
    });
});

app.get('/editar-usuario/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await Usuario.findByPk(id);
        if (!usuario) {
            return res.status(404).send('Usuario no encontrado');
        }

        res.render('formulario', {
            titulo: 'Editar Usuario',
            cursoOptions: ['Curso 1', 'Curso 2', 'Curso 3', 'Curso 4'],
            usuario
        });
    } catch (error) {
        console.error('Error al obtener el usuario:', error);
        res.status(500).send('Error del servidor');
    }
});

app.delete('/eliminar-usuario/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await Usuario.findByPk(id);

        if (!usuario) {
            return res.status(404).send('Usuario no encontrado');
        }

        await usuario.destroy();
        res.status(200).send('Usuario eliminado');
    } catch (error) {
        console.error('Error al eliminar el usuario:', error);
        res.status(500).send('Error del servidor');
    }
});


(async () => {
    try {
        await sequelize.sync();
        console.log('Modelos sincronizados con la base de datos.');
    } catch (error) {
        console.error('Error al sincronizar los modelos:', error);
    }
})();

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
