import React from 'react'
import Axios from '../utility/Axios';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const UpdateProduct = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const nav = useNavigate();
    const [file, setFile] = useState(null);

    const [newProduct, setNewProduct] = useState({
        title: "",
        price: 0,
        category: "",
        description: "",
        image: ""
    })

    useEffect(() => {
        async function loadProduct() {
            try {
                const res = await Axios.get(`/products/singalProduct/${id}`);
                setProduct(res.data.data);

            } catch (error) {
                console.log("error Singal Product", error.message);
            }
        }
        loadProduct();
    }, [id]);

    console.log("update old data: ", product);

    // async function UpdateProduct(product) {
    //     try {
    //         const res = await Axios.put(`/products/updateProduct/${id}`, product);
    //         console.log("Update Product:", res.data);

    //     } catch (error) {
    //         console.log("Update Product error: ", error.message);
    //     }
    // }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("product", JSON.stringify(product));
            if (file) formData.append("file", file);

            const res = await Axios.put(`/products/updateProduct/${id}`, formData, { headers: { "Content-Type": "multipart/form-data" } });
            console.log("Update Product:", res.data);

            nav("/");

        } catch (error) {
            console.log("Update Product error: ", error.message);
        }
    }

    function handleChange(e) {
        setProduct({ ...product, [e.target.name]: e.target.value });
        console.log(product);
    }
    function handleFileChange(e) {
        setFile(e.target.files[0]);
    }

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Add Product</h1>

            <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
                <div className="card shadow p-4" style={{ width: "100%", maxWidth: "400px" }}>

                    <h3 className="text-center mb-4">Add New Product</h3>


                    <form onSubmit={handleSubmit} encType='multipart/form-data'
                        // e.preventDefault();
                        // UpdateProduct(product);
                        // // setProduct({
                        // //     title: "",
                        // //     price: 0,
                        // //     category: "",
                        // //     description: "",
                        // //     image: ""
                        // // })
                        // nav("/");

                        // }}
                        method='post'>

                        <input
                            className="form-control"
                            value={product.title}
                            onChange={handleChange}
                            type="text"
                            name="title"
                            id="title"
                            placeholder='Enter Product Title'
                            style={{ margin: "10px 0px" }} />

                        <input className="form-control"
                            value={product.price}
                            onChange={handleChange}
                            type="number"
                            name="price"
                            id="price"
                            placeholder='Enter Product Price'
                            style={{ margin: "10px 0px" }} />

                        <input className="form-control"
                            type="text"
                            value={product.category}
                            onChange={handleChange}
                            name="category"
                            id="category"
                            placeholder='Enter Product Category'
                            style={{ margin: "10px 0px" }} />

                        <textarea className="form-control"
                            value={product.description}
                            onChange={handleChange}
                            name="description"
                            id="description"
                            placeholder='Enter Product Description'
                            style={{ width: "100%", margin: "10px 0px" }}></textarea>
                        {/* <input className="form-control"
                            type="text"
                            value={product.image}
                            onChange={handleChange}
                            name="image"
                            id="image"
                            placeholder='Enter Product image URL'
                            style={{ margin: "10px 0px" }} /> */}

                        <div style={{ margin: "10px 0px" }}>
                            <label>Current Image:</label>
                            {product.image && (
                                <img src={product.image} alt="current" style={{ display: "block", maxWidth: "100px", marginTop: "5px" }} />
                            )}
                        </div>
                        
                        <input
                            className="form-control"
                            type="file"
                            onChange={handleFileChange}
                            style={{ margin: "10px 0px" }}
                        />
                        <button className='btn btn-success'>Upadte Product</button>

                    </form>
                </div>
            </div>


        </div>
    )
}

export default UpdateProduct
