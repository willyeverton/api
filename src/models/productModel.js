const mongoose = require('mongoose');

let schema = new mongoose.Schema({
    nome: {
        type: String, 
        required: true, 
        max: 100
    },
    marca: {
        type: String, 
        required: true
    },
});

// Exportar o modelo
module.exports = mongoose.model('product', schema);