import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Axios from '../utility/Axios.js';
const Product = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const nav = useNavigate();

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

  return (
    <div>
      <h1>Products</h1>

      <div className='container'>
        <div className='d-flex justify-content-center align-items-center'>

          <div key={product._id} className="card w-100" style={{ width: "18rem" }}>
            <div className='w-100 h-100 object-fit-cover'>
              <img src={product.image} className="card-img-top" style={{ width: "100%", height: "400px", objectFit: "contain" }} alt="..." />
            </div>
            <div className="card-body">
              <h6 className="card-title"><b>Title: </b>{product.title}</h6>
              <h6 className="card-text fw-normal"><b>Category: </b> {product.category}</h6>
              <p ><b> Description: </b>{product.description}</p>
              <div className='d-flex gap-3'>
                <button className='btn btn-warning' onClick={() =>nav(`/updateProduct/${product._id}`)}>Update Product</button>
                {/* <button type='submit' onClick={()=>{
                      nav(`/singalProduct/${product.id}`);
                    }}className="btn btn-warning">Add To Cart</button> */}

              </div>
            </div>
          </div>

        </div>


      </div>
    </div>
  )
}

export default Product