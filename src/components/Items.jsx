import ItemCard from "./ItemCard";

function Items(props) {
  const { items } = props;

  return (
    <div className="item-list">
      {items.map((item) => (
        <ItemCard key={item.item_id} item={item} />
      ))}
    </div>
  );
}

export default Items;

// {
//     return (
//         <span key={item.item_id}>
//             {item.name}
//         </span>
//         )
//     }
