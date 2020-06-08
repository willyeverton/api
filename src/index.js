// Biblioteca de Rotas
const express = require("express");

// Drive do MongoDB de conexão
const mongoose = require("mongoose");

// biblioteca que faz o require de varios arquivos de uma unica vez
const requireDir = require("require-dir");

// inicia a aplicação
const app = express();

try {    
    // conecta do DB
    mongoose.connect(
        "mongodb://127.0.0.1:27017/apiDB", 
        {
            useNewUrlParser:true, 
            useUnifiedTopology: true
        }
    );

    // importa todos os models
    requireDir('./models');


    // habilita o recebimento de post com json
    app.use(express.json());

    // fica escutando a rota '/api/product' e chama rota certa do Routes
    app.use('/api/product', require('./routes/productRoute'));

} catch (error) {
    console.log(error);
}
// porta da aplicação
app.listen(8080);
