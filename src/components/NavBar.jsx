import { Link } from "react-router";
function NavBar(props) {
  return (
    <nav id="NavBar">
      <Link to={"/items"}>
        <button className="button-nav-bar">Items</button>
      </Link>
      <Link to={"/categories"}>
        <button className="button-nav-bar">Catergories</button>
      </Link>
      <Link to={"/users"}>
        <button className="button-nav-bar">Users</button>
      </Link>
    </nav>
  );
}

export default NavBar;
