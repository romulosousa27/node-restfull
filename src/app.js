const http =  require("http");
const express = require("express");

/** instanciando o Express */
const app = express();

const host = '127.0.0.1';
const port = 3000;

/** port express */
app.set("port", port);

/** middlewares */
// 404
app.use( (request, response, next) => {
    response.status(404).send();
});

const server =  http.createServer(app);


server.listen(port, host, () => {
    console.log(`Servidor em execução: http://${host}:${port}/`);
});