const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const apiRoutes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://juanpaospi19:Elingenieromeca123@cluster0.feoos.mongodb.net/TiendaGamer')
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error al conectar a MongoDB:', err));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Conectar rutas de la API
// Ruta para la raíz del servidor
app.get('/', (req, res) => {
  res.send('¡Servidor de Tienda Gamer funcionando correctamente! Visita /api para acceder a la API.');
});

const PORT = process.env.PORT || 5001; // Cambia 5000 por otro número
app.listen(PORT, () => {
  console.log('Server running on http://localhost:5001');
});
