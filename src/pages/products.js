import React, { useState, useEffect } from 'react'
import { getCategorizedProducts } from '../api/product'
import CategoryRows from '../components/categoryRows';
import Spinner from 'react-bootstrap/Spinner';

function Products() {
  const [categories, setCategories] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [enable, setEnable] = useState(true)

  useEffect(() => {
    getCategorizedProducts().then((resposne) => {
      setCategories(resposne.categories);
      setIsLoaded(true);
    })
  }, [])

  const fetchMoreCategories = () => {
    let newCategories = categories
    getCategorizedProducts(newCategories.length).then((response) => {
      if (response.categories.length > 0) {
        newCategories = newCategories.concat(response.categories)
        setCategories(newCategories)
      } else {
        setEnable(false)
      }
    })
  }

  return (
    <>
      <h1 className='text-center mb-5'>Products</h1>
      { isLoaded ? <div className='container my-4'>
          { categories.length > 0 ?
            <>
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
                  {console.log('car', categories)}
                {categories.map((category) => (
                  <CategoryRows key={category.id} category={category} products={category.products}/>
                ))}
                </tbody>
              </table>
              { enable ?
                <button type="button" class="btn btn-primary" onClick={fetchMoreCategories}>
                  More Categories
                </button> :
                <button type="button" class="btn btn-primary" disabled onClick={fetchMoreCategories}>
                  No More Categories
                </button>
              }
            </>
            :
            <div className="alert alert-danger text-center" role="alert">
              Oops...!!! No Record Found
            </div>
          }
        </div> :
        <div className='row'>
          <div className='offset-5'><Spinner animation="grow" role="status" className='mt-5 ml-5' /></div>
          <h3 className='mt-5 ml-2'>Loading...</h3>
        </div>
      }
    </>
  )
}

export default Products
