import React from 'react'
import { useEffect } from 'react'
import Axios from '../utility/Axios.js'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const AllProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    const nav = useNavigate();
    useEffect(() => {
        async function allDataLoad() {
            try {
                const res = await Axios.get("/products/allProducts");
                console.log(res.data);
                setAllProducts(res.data.data)
            } catch (error) {
                console.log("error AllProduct", error.message);
            }
        }
        allDataLoad();
    }, [])

    async function deleteProduct(id){
        try {
            const res = await Axios.delete(`/products/deleteProduct/${id}`);
            console.log(res.data);
            setAllProducts(res.data.data);
        } catch (error) {
            console.log("Error Detele Product", error.message);
        }
    }
    
    console.log(allProducts);



    return (
        <div>
            <h1>AllProducts</h1>

            <div className='container'>
                <div className='d-flex justify-content-center align-items-center'>
                    <div className='row mx-auto gap-2'>

                        {allProducts.map((val) => (
                            <div key={val._id} className="card" style={{ width: "18rem" }}>
                                <div className='w-100 h-100 object-fit-cover'>
                                    <img src={val.image} className="card-img-top" style={{ width: "100%", height: "250px", objectFit: "contain" }} alt="..." />
                                </div>
                                <div className="card-body">
                                    <h6 className="card-title">Title: {val.title}</h6>
                                    <h6 className="card-text fw-normal">Category: {val.category}</h6>
                                    <p >Price: $ {val.price}</p>
                                    <div className='d-flex gap-3'>
                                        <button type='submit' onClick={() => {
                                            nav(`/singalProduct/${val._id}`);
                                        }} className="btn btn-primary">View</button>
                                        <button className='btn btn-danger' onClick={()=>{
                                            console.log(val._id);
                                            deleteProduct(val._id);
                                        }}>Delete Product</button>
                                        {/* <button type='submit' className="btn btn-warning">Add To cart</button> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AllProducts