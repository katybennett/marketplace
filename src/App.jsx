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

  useEffect(() => {
    getItems()
      .then((res) => {
        setItems(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    getCategories()
      .then((res) => {
        setCategories(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Header />
      <NavBar>
        <Categories categories={categories} />
      </NavBar>

      <Items items={items} />
    </>
  );
}

export default App;
