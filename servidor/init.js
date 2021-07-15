require("dotenv").config();
const express = require("express");
const { errorServidor } = require("./errores");

const app = express();
const puerto = process.env.PUERTO || process.env.PORT || 3075;

const server = app.listen(puerto, () => {
    console.log(`Servidor escuchando en el puerto ${puerto}`);
});

server.on("error", (err) => errorServidor(err, puerto));

module.exports = app;