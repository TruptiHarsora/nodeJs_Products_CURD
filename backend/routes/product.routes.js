const express = require("express");
const { 
    all_product,
    singal_product,
    get_addProduct,
    post_addProduct,
    delete_product,
    get_updateProduct,
    post_updateProduct
 } = require("../controller/product.controller");
const routes = express.Router();

routes.get("/allProducts", all_product);
routes.get("/singalProduct/:id", singal_product);
routes.get("/addProduct", get_addProduct);
routes.post("/addProduct", post_addProduct);
routes.delete("/deleteProduct/:id", delete_product);
routes.get("/updateProduct/:id", get_updateProduct);
routes.put("/updateProduct/:id", post_updateProduct)

module.exports = routes;