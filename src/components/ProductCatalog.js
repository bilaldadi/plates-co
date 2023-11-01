import React from 'react';
import '../App.css';

const ProductCatalog = ({ addToBasket }) => {
  return (
    <div className="product-card">
      <h2 className="catalog-title">Product Catalog</h2>
      <div className="product-catalog-container">

        <div className='product-item'>
          <p className="product-name">Red Plate</p>
          <p className="product-price">Price: $32.95</p>
          <p className="product-description">Buy one red plate, get the second half price</p>
          <button onClick={() => addToBasket("R01")} className="add-to-basket-button">Add Red Plate To Basket</button>
        </div>

        <div className='product-item'>
          <p className="product-name">Green Plate</p>
          <p className="product-price">Price: $24.95</p>
          <button onClick={() => addToBasket("G01")} className="add-to-basket-button">Add Green Plate To Basket</button>
        </div>

        <div className='product-item'>
          <p className="product-name">Blue Plate</p>
          <p className="product-price">Price: $7.95</p>
          <button onClick={() => addToBasket("B01")} className="add-to-basket-button">Add Blue Plate To Basket</button>
        </div>

      </div>
    </div>
  );
};

export default ProductCatalog;
