function NavBar(props) {
  return (
    <nav id="NavBar">
      <button className="button-nav-bar">All</button>
      {props.children}
    </nav>
  );
}

export default NavBar;
