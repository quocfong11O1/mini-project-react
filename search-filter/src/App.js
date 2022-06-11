import React, {useState} from 'react'
import "./App.css"
import { Users } from "./user.js"
import Table from "./Table.js"

function App() {
  const [query, setQuery] = useState('');

  const keys = ["first_name", "last_name", "email"];
  
  const search = (data) => {
    return data.filter((item) => keys.some((key) => item[key].toLowerCase().includes(query)));
  }

  return (
    <div className="app">
      <input 
        type="text" 
        placeholder="Search..." 
        className="search"
        onChange={(e) => setQuery(e.target.value)}/>
        <Table data={search(Users)}/>
    </div>
  )
}

export default App