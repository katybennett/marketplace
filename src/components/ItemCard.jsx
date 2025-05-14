const imgNotFound =
  "https://media.istockphoto.com/id/1444047509/vector/coming-soon-photo-icon-with-loading-circle-no-picture-no-image-available.webp?s=2048x2048&w=is&k=20&c=SBjjvfFcckKIe06QJbIWLKR8I5iQ4AH27yoJL2Bkk9g=";

function ItemCard(props) {
  const { item } = props;

  return (
    <div className="item-card-container">
      {/* Top - Item Image */}
      <div className="item-img">
        <img
          id="item-card-img"
          src={item.img_url}
          alt={item.item_name}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = imgNotFound;
          }}
        />
      </div>

      {/* Middle - Item Name */}
      <div className="item-name">{item.item_name}</div>

      {/* Bottom */}
      <div className="item-bottom">
        {/*Left - Item Information */}
        <div className="item-info">
          <p className="item-description">{item.description}</p>
          <p className="item-category">{item.category_name}</p>
        </div>
        {/* Right - Item Price */}
        <div className="item-price">
          <p>£{item.price}</p>
        </div>
      </div>
      {/* End */}
    </div>
  );
}

export default ItemCard;
