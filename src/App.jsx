import { useEffect, useState } from 'react'
import './App.css'
import Items from './components/Items'
import axios from 'axios'

function App() {
  console.log("rendering App")

  const [items, setItems] = useState([])
  
  useEffect(() => {
    axios
      .get("https://nc-marketplace-1-xm97.onrender.com/api/items")
      .then((res) => {
        setItems(res.data.items)
      })
  }, [])

  return (
    <>
      <Items items={items}/>
    </>
  )
}

export default App
