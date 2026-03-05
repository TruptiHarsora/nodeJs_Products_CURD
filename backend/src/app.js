const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
const products = require("../model/ProductSchema.js");
const { FRONTEND_ORIGIN } = require("../config/config.js");
const ProductRoutes = require("../routes/product.routes.js");
// console.log("origin",FRONTEND_ORIGIN);
app.use(cors({
    origin: FRONTEND_ORIGIN,
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/products",ProductRoutes);


// app.get("/", async (req, res) => {
//     const axios_res = await axios.get("https://fakestoreapi.com/products");
//     // console.log(axios_res.data);

//    const pro_data = await products.insertMany(axios_res.data);

//     res.json({
//         success: true,
//         message: "Default page",
//         data: pro_data
//     })
// })

app.get("/", async (req, res) => {
    
    res.json({
        success: true,
        message: "Default page",
       
    })
})








module.exports = { app }
