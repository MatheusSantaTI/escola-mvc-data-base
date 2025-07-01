// controllers/aluno.controller.js

function listar(req, res) {
    res.send("Listando alunos...");
}

function criar(req, res) {
    res.send("Criando aluno...");
}

function atualizar(req, res) {
    res.send("Atualizando aluno...");
}

function deletar(req, res) {
    res.send("Deletando aluno...");
}

module.exports = {
    listar,
    criar,
    atualizar,
    deletar
};
// controllers/curso.controller.js      