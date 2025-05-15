import { useEffect, useState } from "react";
import "./App.css";
import Items from "./components/Items";
import { getItems } from "./Api";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

function App() {
  console.log("rendering App");

  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems()
      .then((res) => {
        setItems(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Header/>
      <NavBar/>
      <Items items={items} />
    </>
  );
}

export default App;
