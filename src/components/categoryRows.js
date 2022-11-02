import React from 'react'
import ProductRow from './productRow';

const CategoryRows = ({ category, products }) => (
  <React.Fragment>
    { products.map((product, index) => (
      <tr>
        <ProductRow key={product.id} product={product}/>
        { index === 0 && <td rowSpan={products.length}>{category.name}</td> }
        { index === 0 && <td rowSpan={products.length}>{category.total_weight} kilograms</td> }
      </tr>
    ))}
  </React.Fragment>
)

export default CategoryRows;
