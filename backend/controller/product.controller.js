const product = require("../model/ProductSchema.js");
const upload = require("../middleware/multer.middleware.js");
const cloudinary = require("../config/cloudinary.js");
const fs = require("fs");

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

// const post_addProduct = async (req, res) => {
//     const res_data = req.body;
//     // console.log(res_data.product);
//     if (!res_data) {
//         console.log("No data from req");
//         return;
//     }
//     const newProduct = new product(res_data.product);
//     await newProduct.save();
//     // await product.save(res_data);

//     const allData = await product.find();
//     res.json({
//         sucess: true,
//         message: "Data added sucessfully",
//         data: allData
//     })
//     res.redirect("/allProducts");

// }


const post_addProduct = [upload.single("file"), async (req, res) => {

    const prod_data = JSON.parse(req.body.product);
    let img_url = prod_data.image || "";

    // if (!req.file) {
    //     console.log("No data from req");
    //     return;
    // }
    // console.log(res_data.product);
    if (req.file) {
        const result = await cloudinary.uploader.upload(req.file.path);
        console.log("resutl: ", result);

        //     const result = await cloudinary.uploader.upload(req.file.path, { folder: "upload" });
        img_url = result.secure_url;
        console.log(img_url);

        fs.unlinkSync(req.file.path);
    }

    const newProduct = new product({ ...prod_data, image: img_url });
    await newProduct.save();
    // await product.save(res_data);

    const allData = await product.find();
    res.json({
        sucess: true,
        message: "Data added sucessfully",
        data: allData
    })
    // res.redirect("/allProducts");

}]

const delete_product = async (req, res) => {
    const id = req.params.id;
    // console.log(id);
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

const post_updateProduct = [  upload.single("file"),async (req, res) => {

    // const res_data = req.body;
    // console.log("post update id", id, "/n body", res_data)
    const id = req.params.id;
    const prod_data = JSON.parse(req.body.product);
    let img_url = prod_data.image || "";

    if (req.file) {
        const result = await cloudinary.uploader.upload(req.file.path);
        console.log("resutl: ", result);


        img_url = result.secure_url;
        console.log(img_url);

        fs.unlinkSync(req.file.path);
    }

    const upadatProduct = new product({ ...prod_data, image: img_url });


    await product.findByIdAndUpdate(id, upadatProduct, {new:true});
    const allData = await product.find();
    res.json({
        sucess: true,
        message: "Data Updated sucessfully",
        data: allData
    })

}]


module.exports = {
    all_product,
    singal_product,
    get_addProduct,
    post_addProduct,
    delete_product,
    get_updateProduct,
    post_updateProduct
}