const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.get("/api/product", ProductController.getAllProduct);
    app.post("/api/product", ProductController.createNewProduct);
    app.get("/api/product/:id", ProductController.getMyProduct);
    // app.put("/api/product/:_id", ProductController.updateProduct);
    // app.delete("/api/product/:_id", ProductController.deleteProduct);
};


