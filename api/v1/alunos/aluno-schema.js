const Joi = require("joi");

const createAluno = {
  payload: Joi.object({
    nome: Joi.string().min(2).required(),
    idade: Joi.number().integer().positive().max(150).required()
  })
};

const consultaPorId = {
  params: Joi.object({
    id: Joi.string().length(24).required() // Valida o formato do ObjectId do MongoDB
  })
};

const consultarAlunos = {
  query: Joi.object({
    idade: Joi.number().integer().max(130),
    nome: Joi.string().min(3).max(100),
    status: Joi.string().valid('ATIVO', 'INATIVO', 'SUSPENSO').default('ATIVO')
  })
};

module.exports = { createAluno, consultaPorId, consultarAlunos };
