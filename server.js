const express = require('express');
const app = express();
const clienteRoutes = require('./route/clienteRoutes');

app.use(express.json());

app.use('/api', clienteRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});