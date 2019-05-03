const http =  require("http");
const express = require("express");
const route = require("./routes/route");
const sequelize = require("./database/database");
const status = require("http-status");


/** Express init */
const app = express();

// garantindo o retornas da api, sejam em formato Json
app.use(express.json());

// prefixo das rotas
app.use('/api', route);

/** middlewares errors */
app.use( (request, response, next) => { 
    response.status(status.NOT_FOUND).send();
});

app.use( (error, response, next) => {
    response.status(status.INTERNAL_SERVER_ERROR).json({ error });
});

sequelize.sync({ force:true }).then((result) => {
    // variavel de ambiente
    const port =  process.env.PORT || 3000;

    app.set("port", port);

    const server =  http.createServer(app);
    server.listen(port);

});