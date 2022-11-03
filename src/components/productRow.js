import React from 'react'

function ProductRow({ product }) {
  
  return (
    <React.Fragment>
      <td>{product.id}</td>
      <td>{product.upc}</td>
      <td>{product.import_date}</td>
      <td>{product.weight} {product.unit}</td>
    </React.Fragment>
  )
}

export default ProductRow