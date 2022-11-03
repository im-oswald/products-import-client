import Products from './pages/products'
import ImportProducts from './pages/importProducts'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/navbar';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <div >
          <Navbar />
          <Routes >
            <Route exact path="/" element={<Products />} />
            <Route exact path="/products" element={<Products />} />
            <Route path='/imports' element={<ImportProducts />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
