 // controllers/cursoController.js

function listar(req, res) {
    res.send('Controller responsável pela listagem');
}

function cadastrar(req, res) {
    res.send('Controller responsável pelo cadastro');
}

function deletar(req, res) {
    res.send('Função responsável por deletar o curso');
}

module.exports = {   
    listar,
    cadastrar,
    deletar
};
