import React, { useState } from 'react';
import ProductCatalog from './components/ProductCatalog';
import Basket from './components/Basket';
import './App.css';


const App = () => {

  const [items, setItems] = useState([]);

  const catalogue = {
    R01: { price: 32.95 },
    G01: { price: 24.95 },
    B01: { price: 7.95 },
  };

  const deliveryRules = [
    { target: 0, charge: 4.95 },  
    { target: 50, charge: 2.95 }, 
    { target: 90, charge: 0 },    
  ];
  

  const offers = [{ productCode: "R01", discount: 0.5 }];

  const addToBasket = (productCode) => {
    setItems([...items, productCode]);
  };

  const deleteItem = (productCode) => {
    const updatedItems = [...items];
    const index = updatedItems.indexOf(productCode);
    if (index !== -1) {
      updatedItems.splice(index, 1);
      setItems(updatedItems);
    }
  };
  

  const resetBasket = () => {
    setItems([]);
  };

  const calculateSubtotal = () => {
    return items.reduce((total, productCode) => {
      return total + catalogue[productCode].price;
    }, 0);

  };

  const applyOffers = (subtotal) => {

    let discount =0;

    for (const offer of offers) {
      if (offer.productCode === "R01") {
        const redPlateCount = items.filter((item) => item === "R01").length;
        if (redPlateCount >= 2) {
           discount = Math.floor(redPlateCount / 2) * catalogue["R01"].price * offer.discount;
          subtotal -= discount;
          
        }
        
      }
      console.log("Subtotal in applyOffers:", discount);
    }
    
    return { subtotal, discountedAmount: discount };
  };

  const applyDeliveryRules = (subtotal) => {
    let deliveryCost = 0;
   
    deliveryRules.sort((a, b) => b.target - a.target);
    if (subtotal === 0 ){
      return 0;
    }else{
    for (const rule of deliveryRules) {
     
      if (subtotal >= rule.target) {
        deliveryCost = rule.charge;
        
        break;
      }
    }
  }
  
    return deliveryCost;
  };
  
  
  

  const calculateTotal = () => {
    const { subtotal, discountedAmount } = applyOffers(calculateSubtotal());
    const deliveryCost = applyDeliveryRules(subtotal);
    const total = subtotal + deliveryCost;
    return { total, discountedAmount, deliveryCost };
  };
  

  return (
    <div className="app-container">
      <h1 className="app-title">Plates Co</h1>
      <ProductCatalog addToBasket={addToBasket} />

      <div className="delivery-info">
        <h3>Delivery Cost</h3>
        <ul>
          <li>Orders under $50 cost $4.95</li>
          <li>For orders under $90, delivery costs $2.95</li>
          <li>Orders of $90 or more have free delivery</li>
        </ul>
      </div>

      <Basket
        items={items}
        calculateSubtotal={calculateSubtotal}
        calculateTotal={calculateTotal}
        applyDeliveryRules={applyDeliveryRules}
        deleteItem={deleteItem}
        resetBasket={resetBasket}
      />
    </div>
  );
};

export default App;