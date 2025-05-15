function Categories({ categories, handleSearch, fetchAndSetItems }) {
  return categories.map((category, i) => (
    <button
      name="category"
      value={category.category_name}
      onClick={handleSearch}
      className="button-nav-bar"
      key={i}
    >
      {category.category_name}
    </button>
  ));
}

export default Categories;
