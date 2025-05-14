import ItemCard from "./ItemCard";

function Items(props) {
  const { items } = props;

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.map((item) => {
          console.log(item);

          return (
            <>
              <ItemCard item={item} key={item.item_id}/>
            </>
          );
        })}
      </ul>
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


