# Web2024-2

## Descrição

Este é um projeto básico em Node.js utilizando o framework Hapi.js para gerenciamento de rotas, Joi para validação de dados e Mongoose para integração com MongoDB, construído na disciplina de Laboratório Web da Fatec Franca.

Atualizações e entrega efetuadas pelos alunos:

## João Pedro Andrade Cintra : 1091392313024

Apresenta estrutura base para desenvolvimento de apis.

## Requisitos

- Node.js (versão recomendada: 14.x ou superior)
- npm (gerenciador de pacotes do Node.js)
- Banco de Dados MongoDB

## Instalação

1. Clone o repositório em sua máquina local:
   ```bash
   git clone git@github.com/JoaoPedroaac/trabalho_fabio.git

   ```
2. Acesse a pasta do projeto:
   ```bash
   cd web2024-2
   ```
3. Instale as dependências do projeto:
   ```bash
   npm install
   ```
4. Configure as variáveis de ambiente:
```bash
Deixe o  . env configurado igual ao arquivo 'banco' que está nesta pasta.
   ```
## Scripts de Inicialização

- **Iniciar em Produção:**
  Para rodar o projeto no modo de produção, execute o comando:
  ```bash
  npm start
  ```
  Isso executará o arquivo `index.js` com o comando `node index.js`.

- **Modo de Desenvolvimento:**
  Para rodar o projeto com recarga automática no modo de desenvolvimento, use:
  ```bash
  npm run dev
  ```
  Este comando utiliza o flag `--watch` do Node.js para reiniciar automaticamente o servidor sempre que houver alterações no código.

- **Testes:**
- [ ] Implementar testes automatizados para endpoints principais

## Dependências Principais

- **@hapi/hapi**: Framework web para construir servidores e APIs.
- **joi**: Biblioteca para validação de dados no Node.js.
- **mongoose**: Biblioteca ODM para integração com MongoDB. 

1. Rotas
   ```bash
   http://localhost:5005/v1/produtos

   ```
1. Rotas
   ```bash
   http://localhost:5005/v1/produtos/{id}

   ```

CRUD FEITO E PRONTO PARA USO.
