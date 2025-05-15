function Categories({ categories }) {
  return categories.map((category, i) => (
    <button className="button-nav-bar" key={i}>
      {category.category_name}
    </button>
  ));
}

export default Categories;
