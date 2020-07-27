const express = require('express');
const routes = express.Router();

const ProcuctController = require('./controllers/ProductController');

routes.get("/products", ProcuctController.index);
routes.get('/products/:id', ProcuctController.show);
routes.post("/products", ProcuctController.store);
routes.put('/products/:id', ProcuctController.update);
routes.delete('/products/:id', ProcuctController.destroy);

module.exports = routes;