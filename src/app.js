const http =  require("http");
const express = require("express");
const route = require("./routes/route");

/** instanciando o Express */
const app = express();

const host = '127.0.0.1';
const port = 3000;

/** port express */
app.set("port", port);

// garantindo o retornas da api, sejam em formato Json
app.use(express.json());

// prefixo das rotas
app.use('/api', route);

/** middlewares */
app.use( (request, response, next) => {
    response.status(404).send();
});

const server =  http.createServer(app);


server.listen(port, host, () => {
    console.log(`Servidor em execução: http://${host}:${port}/`);
});