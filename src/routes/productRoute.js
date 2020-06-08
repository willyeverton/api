const express = require('express');
const router = express.Router();

// Colocar controller que ainda não foi criado
const product = require("../controllers/productController");

// chama o metodo de acordo com a rota
router.get('/list', product.list);
router.get('/show/:id', product.show);
router.post('/create', product.create);
router.put('/update/:id', product.update);
router.delete('/delete/:id', product.delete);

module.exports = router;