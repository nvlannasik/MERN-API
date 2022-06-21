const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products');

router.post('/product', productsController.createProduct);
router.get('/products', productsController.getAllProducts);
router.get('/products/:id', productsController.getProductById);
router.put('/products/:id', productsController.updateProduct);
router.delete('/products/:id', productsController.deleteProduct);

module.exports = router;
