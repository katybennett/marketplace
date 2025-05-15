function NavBar(props) {
  return (
    <nav id="NavBar">
      <button name="category" value="" onClick={props.handleSearch} className="button-nav-bar">All</button>
      {props.children}
    </nav>
  );
}

export default NavBar;
