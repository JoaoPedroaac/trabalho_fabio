const Aluno = require('./aluno-model');

// Salva um aluno no banco
const save = async (alunoData) => {
  const aluno = new Aluno(alunoData);
  return await aluno.save(); // Salva no MongoDB
};

// Lista alunos com filtros opcionais
const list = async (filters = {}) => {
  return await Aluno.find(filters); // Busca no MongoDB
};

module.exports = { save, list };
