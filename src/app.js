const express = require('express');
const bodyParser = require('body-parser');
const db = require('./utils/db');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/', routes); // Utiliza las rutas definidas en routes.js

db.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
  });
});
