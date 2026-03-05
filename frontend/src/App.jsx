import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import AllProducts from './components/AllProducts'
import Product from './components/Product'
import AddProduct from './components/AddProduct'
import UpdateProduct from './components/UpdateProduct'

const App = () => {
  return (
    
      <div>App
        <div className='container-fluid mx-0'>
          <div className='d-flex justify-content-center gap-5 bg-secondary-subtle fs-5 py-2 fw-bolder' >

            <Link to="/">All Product</Link>
            <Link to="/addProduct">Add Product</Link>
            {/* <Link to="/updateProduct/:id">Update Product</Link> */}
          </div>

          <Routes>
            <Route path='/' element={<AllProducts />} />
            <Route path='/singalProduct/:id' element={<Product />} />
            <Route path='/addProduct' element={<AddProduct />} />
            <Route path='/updateProduct/:id' element={<UpdateProduct />} />
          </Routes>
        </div>
      </div>
    
  )
}

export default App