// Importando módulo express
const express = require('express');

// Importando o controller de cursos
const cursoController = require('./controllers/curso.controller');

// Criando instância do Express
const app = express();

// Middleware para aceitar JSON no corpo das requisições
app.use(express.json());

// Rotas
app.get('/cursos', cursoController.listar);           // Listar cursos
app.post('/cursos', cursoController.cadastrar);       // Cadastrar novo curso
app.delete('/cursos/:id', cursoController.deletar);   // Deletar curso por ID

// Iniciando o servidor na porta 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
// Exportando o app para testes ou outros usos
module.exports = app;       