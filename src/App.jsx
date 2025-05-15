import { useEffect, useState } from "react";
import "./App.css";
import Items from "./components/Items";
import { getCategories, getItems } from "./api";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Categories from "./components/Categories";
import SearchBar from "./components/SearchBar";

function App() {

  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState({});

  useEffect(() => { 
    fetchAndSetItems();
  }, [searchTerm]);

  useEffect(() => {
    getCategories()
      .then((res) => {
        setCategories(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleSearch(e) {
    console.log("EVENT TARGET", e.target);
    const { value, name } = e.target;
    setSearchTerm((currentSearch) => ({
      ...currentSearch,
      [name]: value,
    }));
  }

  function fetchAndSetItems() {
    getItems(searchTerm)
      .then((res) => {
        setItems(res);
        console.log("New Items set");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleClick(e) {
    e.preventDefault();
    fetchAndSetItems();
  }

  return (
    <>
      <Header />
      <SearchBar
        handleSearch={handleSearch}
        handleClick={handleClick}
        searchTerm={searchTerm}
      />
      <NavBar handleSearch={handleSearch}>
        <Categories
          handleSearch={handleSearch}
          fetchAndSetItems={fetchAndSetItems}
          categories={categories}
        />
      </NavBar>

      <Items items={items} />
    </>
  );
}

export default App;
