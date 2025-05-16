import { useState, useEffect } from "react";
import { getCategories } from "../api";
import { Link } from "react-router";

function Categories({ handleSearch }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((res) => {
        setCategories(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return categories.map((category, i) => (
    <Link to="/items" key={i}>
      <button
        name="category"
        value={category.category_name}
        onClick={handleSearch}
        className="button-nav-bar"
      >
        {category.category_name}
      </button>
    </Link>
  ));
}

export default Categories;
