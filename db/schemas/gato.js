const { Schema, model } = require("mongoose");

const gatoSchema = new Schema({
    tipo: {
        type: String,
        required: true,
    },
});

const Gato = model("Gato", gatoSchema, "TIPOS");

module.exports = {
    Gato,
};