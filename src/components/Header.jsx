import { Link } from "react-router";

function Header() {
  return (
    <>
      <div className="basket-button-container">
        <h1>Marketplace</h1>
        <Link to="/basket">
          <button className="basket-button">Basket</button>
        </Link>
      </div>
    </>
  );
}

export default Header;
