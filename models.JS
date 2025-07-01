// models/professor.model.js

let professores = [
  { id: 1, nome: 'Dr. Silva', disciplina: 'Matemática' },
  { id: 2, nome: 'Profa. Souza', disciplina: 'História' }
];

function listar() {
  return professores;
}

function buscarPorId(id) {
  return professores.find(prof => prof.id === id);
}

function criar(professor) {
  const novoId = professores.length ? professores[professores.length -1].id + 1 : 1;
  const novoProfessor = { id: novoId, ...professor };
  professores.push(novoProfessor);
  return novoProfessor;
}

function atualizar(id, dadosAtualizados) {
  const index = professores.findIndex(prof => prof.id === id);
  if (index === -1) return null;

  professores[index] = { ...professores[index], ...dadosAtualizados };
  return professores[index];
}

function deletar(id) {
  const index = professores.findIndex(prof => prof.id === id);
  if (index === -1) return false;

  professores.splice(index, 1);
  return true;
}

module.exports = {
  listar,
  buscarPorId,
  criar,
  atualizar,
  deletar
};
// models/curso.model.js        