const Hapi = require("@hapi/hapi");
const mongoose = require("mongoose"); // Importa o Mongoose
const routes = require("./config/routes");
const produtoRoutes = require("./api/v1/produtos/produto-routes");
const config = require('./config/envs-config');

const server = Hapi.server({
    port: config.port,
    host: config.host
});

routes.forEach((path) => server.route(path));

produtoRoutes.forEach((route) => server.route(route));

const connectDB = async () => {
    try {
        await mongoose.connect(config.databaseUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Conexão bem-sucedida com o MongoDB");
    } catch (err) {
        console.error("Erro ao conectar ao MongoDB:", err.message);
        process.exit(1); // Encerra a aplicação se a conexão falhar
    }
};

connectDB();

module.exports = server;
