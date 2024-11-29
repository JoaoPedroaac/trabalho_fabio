const alunoBusiness = require("./aluno-business");

// Obtém lista de alunos
const getAlunos = async (request, h) => {
  try {
    const result = await alunoBusiness.list(request.query);
    return h.response(result).code(200);
  } catch (error) {
    console.error("Erro ao obter alunos:", error);
    return h.response({ error: "Erro ao obter alunos" }).code(500);
  }
};

// Busca aluno por ID
const alunoPorId = async (request, h) => {
  try {
    const idAluno = request.params.id;
    const alunoProcurado = await alunoBusiness.list({ _id: idAluno });
    if (alunoProcurado.length > 0) {
      return h.response(alunoProcurado[0]).code(200);
    }
    return h.response({ message: "Aluno não encontrado" }).code(404);
  } catch (error) {
    console.error("Erro ao buscar aluno:", error);
    return h.response({ error: "Erro ao buscar aluno" }).code(500);
  }
};

// Cria um novo aluno
const createAluno = async (request, h) => {
  try {
    const result = await alunoBusiness.save(request.payload);
    return h.response(result).code(201);
  } catch (error) {
    console.error("Erro ao criar aluno:", error);
    return h.response({ error: "Erro ao criar aluno" }).code(500);
  }
};

module.exports = { getAlunos, createAluno, alunoPorId };
