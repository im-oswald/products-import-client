import React, { useState, useEffect } from 'react'
import { getAllProducts } from '../api/product'
import CategoryRows from '../components/categoryRows';

const Products = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getAllProducts().then((resposne) => setCategories(resposne.categories))
  }, [])

  return (
    <div className='container my-4'>
      <h1 className='my-4 text-center'>Products</h1>
      {categories.length > 0 ?
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>UPC</th>
              <th>Import Date</th>
              <th>Weight</th>
              <th>Category</th>
              <th>Total Weight</th>
            </tr>
          </thead>
          <tbody>
          {categories.map((category) =>
            <CategoryRows key={category.id} category={category} products={category.products}/>
          )}
          </tbody>
        </table>
        :
        <h2 className='text-center'>
          Processing...
        </h2>
      }
    </div>
  )
}

export default Products;
