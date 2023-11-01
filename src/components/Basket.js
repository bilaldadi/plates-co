import React from 'react';
import '../App.css'; // Import your CSS file for styling

const Basket = ({ items, calculateTotal, calculateSubtotal, deleteItem, resetBasket }) => {
  const { total, discountedAmount, deliveryCost } = calculateTotal();

  return (
    <div className="basket">
      <h2 className="basket-title">Basket</h2>
      <p className="basket-items-title">Items:</p>
      <ul className="basket-item-list">
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteItem(item)} className="delete-button">
              Delete
            </button>
          </li>
        ))}
      </ul>

      <p className="subtotal">Items SubTotal: ${calculateSubtotal().toFixed(2)}</p>

      {discountedAmount >= 0 && (
        <p className="discounted-amount">Discounted Amount: ${discountedAmount.toFixed(2)}</p>
      )}

      <p className="delivery-cost">Delivery Cost: ${deliveryCost.toFixed(2)}</p>

      <p className="total">Total: ${total.toFixed(2)}</p>

      <button onClick={resetBasket} className="reset-button">
        Reset Basket
      </button>
    </div>
  );
};

export default Basket;
