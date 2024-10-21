const express = require('express');
const app = express();
const routes = require('./routes'); // Importar o arquivo de rotas
const bodyParser = require('body-parser');

// Configurações do Express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rotas
app.use('/', routes);

// Porta
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});