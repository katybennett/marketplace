function ItemCard(props) {
  const { item, key } = props;

  return (
    <div className="item-card-container">
      <li key={key}>
        {item.item_name}
        {item.description}
      </li>
    </div>
  );
}

export default ItemCard;
