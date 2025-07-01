// server.js

const express = require('express');
const app = express();

// Middleware para interpretar JSON
app.use(express.json());

// Importando rotas
const alunoRoutes = require('./routes/alunoRoutes');
const professorRoutes = require('./routes/professorRoutes');

// Usando as rotas
app.use('/alunos', alunoRoutes);
app.use('/professores', professorRoutes);

        // Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
// Exportando o app para testes
module.exports = app;       