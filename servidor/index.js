const morgan = require("morgan");
const express = require("express");
const cors = require("cors");
const app = require("./init");
const { errorGeneral, error404 } = require("./errores");
const rutasGato = require("./rutas/gato");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());


app.use("/tipos", rutasGato);
app.use(errorGeneral);
app.use(error404);