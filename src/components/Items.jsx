import ItemCard from "./ItemCard";
import { useState, useEffect } from "react";
import { getItems } from "../api";

function Items({ searchTerm, setBasketItems }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getItems(searchTerm)
      .then((res) => {
        setItems(res);
        console.log("New Items set");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="item-list">
      {items.map((item) => (
        <ItemCard key={item.item_id} item={item} setBasketItems={setBasketItems}  />
      ))}
    </div>
  );
}

export default Items;
