const express = require('express');
const routes = require('./routes/registrarr.js');

const app = express();
const port = 3000;

// Middleware para analizar el cuerpo de las solicitudes en formato JSON
app.use(express.json());

// Rutas de la API
app.use('/api', routes);

// Manejo de errores para rutas no definidas
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

// Manejo centralizado de errores
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
    },
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
