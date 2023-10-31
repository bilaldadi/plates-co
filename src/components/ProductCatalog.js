import React from 'react';
import '../App.css';

const ProductCatalog = ({ addToBasket }) => {
  return (
    <div className="product-card">
      <h2>Product Catalog</h2>
      <div className="product-catalog-container">

        <div>
            <div className='product-catalog-intro' >
                <p>Red Plate</p>
                <p>Price: $32.95</p>
                <p>buy one red plate, get the second half price</p>
                <button onClick={() => addToBasket("R01")}>Add Red Plate To Basket</button>
            </div>
          
        </div>

        <div>
        <div className='product-catalog-intro' >
                <p>Green Plate</p>
                <p>Price:$24.95</p>
                <br></br>
                <br></br>
                <br></br>
          <button onClick={() => addToBasket("G01")}>Add Green Plate To Basket</button>
          </div>
        </div>

        <div>
        <div className='product-catalog-intro' >
                <p>Blue Plate</p>
                <p>Price:$7.95</p>
                <br></br>
                <br></br>
                <br></br>
          <button onClick={() => addToBasket("B01")}>Add Blue Plate To Basket</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCatalog;
