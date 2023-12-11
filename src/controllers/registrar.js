const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Puedes conectar esto a una base de datos si es necesario
const shoes = [];

// Ruta para agregar un zapato
app.post('/api/addShoe', (req, res) => {
  try {
    const newShoe = req.body;

    // Validación de datos (asegúrate de que se proporcionen datos)
    if (!newShoe || Object.keys(newShoe).length === 0) {
      throw new Error('Datos incompletos');
    }

    shoes.push(newShoe);
    res.json({ success: true, message: 'Agregado con éxito' });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ success: false, message: 'Error al agregar el zapato' });
  }
});

// Ruta para obtener todos los zapatos
app.get('/api/getShoes', (req, res) => {
  res.json(shoes);
});

app.listen(port, () => {
  console.log(`Servidor funcionando en el puerto ${port}`);
});
