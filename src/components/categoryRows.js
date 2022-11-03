import React, { useState } from 'react'
import ProductRow from './productRow';
import { getMoreProducts } from '../api/product'

function CategoryRows({ category, products }) {
  const [categoryProducts, setCategoryProducts] = useState(products)
  const [enable, setEnable] = useState(true)
  
  const fetchMoreProducts = () => {
    let newProducts = categoryProducts
    getMoreProducts(category.id, categoryProducts.length).then((response) => {
      if (response.products.length > 0) {
        newProducts = newProducts.concat(response.products)
        setCategoryProducts(newProducts)
      } else {
        setEnable(false)
      }
    })
  }

  return (
    <>
      { categoryProducts.map((product, index) => ( 
        <tr>
          <ProductRow key={product.id} product={product}/>
          { index === 0 && <td rowSpan={products.length}>{category.name} </td> }
          { index === 0 && <td rowSpan={products.length}>{category.total_weight} kilograms</td> }
       
        </tr>
      ))}
      <tr>
        <td colSpan={6}>
          { enable ?
            <button type="button" className="btn btn-link offset-5" onClick={fetchMoreProducts}>
              Click here to see more products...
            </button> :
            <span className="text-dark offset-5"> No more products for this category </span>
          }
        </td>
      </tr> 
    </>
  )
}

export default CategoryRows