import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";

function Basket({ basketItems }) {
  console.log("BASKET ITEMS", basketItems);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    addToTotal();
  }, [basketItems]);

  function addToTotal() {
    let basketTotal = 0;
    basketItems.map((item) => {
      basketTotal += item.price;
    });
    setTotal(basketTotal);
  }

  return (
    <div id="basket-container">
      <div className="basket-list">
        {basketItems.map((item) => (
          <li>
            <>{item.item_name}</>
            <>£{item.price}</>
          </li>
        ))}
      </div>
      <div className="total-basket">Total= £{total}</div>
    </div>
  );
}

export default Basket;
