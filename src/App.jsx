import { useEffect, useState } from "react";
import "./App.css";
import Items from "./components/Items";
import { getCategories, getItems } from "./Api";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Categories from "./components/Categories";

function App() {
  console.log("rendering App");

  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState({category_name: ""});

  useEffect(() => {
    getItems(searchTerm)
      .then((res) => {
        setItems(res);
      })
      .catch((err) => {
        console.log(err);
      });
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

  function handleSearch (e) {
    console.log("EVENT TARGET", e.target)
    const {value, name } = e.target
    setSearchTerm((currentSearch, e) => (
      {
        ...currentSearch, [name]: value
      }
    ))
  }

  return (
    <>
      <Header />
      <NavBar>
        <Categories handleSearch={handleSearch} categories={categories} />
        
      </NavBar>

      <Items items={items} />
    </>
  );
}

export default App;
