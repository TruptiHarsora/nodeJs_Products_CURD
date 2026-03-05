const product = require("../model/ProductSchema.js");

const all_product = async (req, res) => {
    const res_data = await product.find();

    res.json({
        sucess: true,
        message: "All Products data loaded sucessfully",
        data: res_data
    })
}

const singal_product = async (req, res) => {
    const id = req.params.id;
    const res_data = await product.findById(id);
    res.json({
        sucess: true,
        message: "singal Product data loaded sucessfully",
        data: res_data
    })
}

const get_addProduct = async (req, res) => {

    res.json({
        sucess: true,
        message: "",
    })

}

const post_addProduct = async (req, res) => {
    const res_data = req.body;
    // console.log(res_data.product);
    if (!res_data) {
        console.log("No data from req");
        return;
    }
    const newProduct = new product(res_data.product);
    await newProduct.save();
    // await product.save(res_data);

    const allData = await product.find();
    res.json({
        sucess: true,
        message: "Data added sucessfully",
        data: allData
    })
    res.redirect("/allProducts");

}

const delete_product = async (req, res) => {
    const id  = req.params.id;
    console.log(id);
    await product.findByIdAndDelete(id);
    const allData = await product.find();

    res.json({
        sucess: true,
        message: "Data Deleted sucessfully",
        data: allData
    })
   
}

const get_updateProduct = async (req, res) => {
    const id = req.params.id;
    const res_data = await product.findById(id);
    res.json({
        sucess: true,
        message: "singal Product data loaded sucessfully",
        data: res_data
    })
}

const post_updateProduct = async (req, res) => {
    const id = req.params.id;
    const res_data = req.body;
    console.log("post update id", id, "/n body", res_data)
    await product.findByIdAndUpdate(id, res_data, { upsert: true });
    const allData = await product.find();
    res.json({
        sucess: true,
        message: "Data Updated sucessfully",
        data: allData
    })
    
}


module.exports = {
    all_product,
    singal_product,
    get_addProduct,
    post_addProduct,
    delete_product,
    get_updateProduct,
    post_updateProduct
}