import React from 'react'

const ProductRow = ({ product }) => (
  <React.Fragment>
    <td>{product.id}</td>
    <td>{product.upc}</td>
    <td>{product.date}</td>
    <td>{product.weight} {product.unit}</td>
  </React.Fragment>
)

export default ProductRow;
