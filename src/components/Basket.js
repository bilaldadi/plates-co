import React from 'react';
import '../App.css';

const Basket = ({ items, calculateTotal,calculateSubtotal, deleteItem, resetBasket }) => {
    const { total, discountedAmount,deliveryCost } = calculateTotal();
  return (
    <div  className="basket">
      <h2>Basket</h2>
        <p>Items:</p>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item} <button onClick={() => deleteItem(item)}>Delete</button> </li>
        ),)}
      </ul>

      <p>Items SubTotal: ${calculateSubtotal().toFixed(2)}</p>

      {discountedAmount >= 0 && (
        <p>Discounted Amount: ${discountedAmount.toFixed(2)}</p>
      )}

      <p>Delivery Cost: ${deliveryCost.toFixed(2)}</p>

      <p>Total: ${total.toFixed(2)}</p>
      <button onClick={resetBasket}>Reset Basket</button>
    </div>
  );
};

export default Basket;
