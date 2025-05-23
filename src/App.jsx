import "./App.css";

import { useEffect, useState } from "react";
import { getCategories, getItems } from "./api";
import { Routes, Route } from "react-router";

import Items from "./components/Items";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Categories from "./components/Categories";
import SearchBar from "./components/SearchBar";
import UserList from "./components/UserList";
import NewUser from "./components/NewUser";
import Basket from "./components/Basket";

function App() {
  const [searchTerm, setSearchTerm] = useState({});
  const [basketItems, setBasketItems] = useState([]);

  function handleSearch(e) {
    const { value, name } = e.target;
    setSearchTerm((currentSearch) => ({
      ...currentSearch,
      [name]: value,
    }));
  }

  return (
    <>
      <Header />
      <SearchBar handleSearch={handleSearch} searchTerm={searchTerm} />
      <NavBar></NavBar>
      <Routes>
        <Route path="/items" element={<Items searchTerm={searchTerm} setBasketItems={setBasketItems} />} />
        <Route path="/categories" element={<Categories handleSearch={handleSearch} />}/>
        <Route path="/users" element={<UserList />} />
        <Route path="/newuser" element={<NewUser />} />
        <Route path="/basket" element={<Basket basketItems={basketItems} /> }  />
      </Routes>
    </>
  );
}

export default App;
