import React from 'react'
import { useState } from 'react';
import Axios from '../utility/Axios';
import { useNavigate } from 'react-router-dom';
const AddProduct = () => {
    const nav = useNavigate();
    const [file, setFile] = useState(null);
    const [newProduct, setNewProduct] = useState({
        title: "",
        price: 0,
        category: "",
        description: "",
        image: ""
    })

    // async function AddNewProduct(product) {
    //     try {
    //         const res = await Axios.post("/products/addProduct", { product });
    //         console.log("Add Product:", res.data);

    //     } catch (error) {
    //         console.log("Add Product error: ", error.message);
    //     }
    // }

    async function handleSubmit(e) {

        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("product", JSON.stringify(newProduct));
            if (file) formData.append("file", file);
            console.log(formData);
            
            const res = await Axios.post("/products/addProduct", formData);
            console.log("Add Product:", res.data);

            setNewProduct({
                title: "",
                price: 0,
                category: "",
                description: "",
                image: ""
            })
            setFile(null);
            nav("/");

        } catch (error) {
            console.log("Add Product error:", error.message);
        }
    }

    function handleChange(e) {
        setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
        console.log(newProduct);
    }

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Add Product</h1>

            <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
                <div className="card shadow p-4" style={{ width: "100%", maxWidth: "400px" }}>

                    <h3 className="text-center mb-4">Add New Product</h3>


                    <form encType='multipart/form-data'
                    onSubmit={handleSubmit}
                        // onSubmit={
                        //     async (e) => {
                        //     e.preventDefault();
                        //     await AddNewProduct(newProduct, file);
                        //     setNewProduct({
                        //         title: "",
                        //         price: 0,
                        //         category: "",
                        //         description: "",
                        //         image: ""
                        //     })
                        //     setFile(null);
                        //     nav("/");

                        // }}
                         method='post'>
                        <input
                            className="form-control"
                            value={newProduct.title}
                            onChange={handleChange}
                            type="text"
                            name="title"
                            id="title"
                            placeholder='Enter Product Title'
                            style={{ margin: "10px 0px" }} />

                        <input className="form-control"
                            value={newProduct.price}
                            onChange={handleChange}
                            type="number"
                            name="price"
                            id="price"
                            placeholder='Enter Product Price'
                            style={{ margin: "10px 0px" }} />

                        <input className="form-control"
                            type="text"
                            value={newProduct.category}
                            onChange={handleChange}
                            name="category"
                            id="category"
                            placeholder='Enter Product Category'
                            style={{ margin: "10px 0px" }} />

                        <textarea className="form-control"
                            value={newProduct.description}
                            onChange={handleChange}
                            name="description"
                            id="description"
                            placeholder='Enter Product Description'
                            style={{ width: "100%", margin: "10px 0px" }}></textarea>
                        {/* <input className="form-control"
                            type="text"
                            value={newProduct.image}
                            onChange={handleChange}
                            name="image"
                            id="image"
                            placeholder='Enter Product image URL'
                            style={{ margin: "10px 0px" }} /> */}

                        <input className="form-control" type="file" onChange={(e) => setFile(e.target.files[0])} />
                        <button className='btn btn-success'>Add Product</button>

                    </form>
                </div>
            </div>


        </div>
    )
}

export default AddProduct