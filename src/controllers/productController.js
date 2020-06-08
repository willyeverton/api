var Product = require('../models/productModel');

module.exports = {
    
    async list(req, res) {
        
        const product = await Product.find();

        return res.json(product); 
    },

    async show(req, res) {
        
        const product = await Product.findById(req.params.id);

        return res.json(product); 
    },
    
    async create(req, res) {
        
        const product = await Product.create(req.body);

        return res.json(product); 
    },

    async update(req, res) {
        
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true});

        return res.json(product); 
    },

    async delete(req, res) {
        
        const product = await Product.findByIdAndRemove(req.params.id);

        return res.json(product); 
    }
}