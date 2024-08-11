import { useState } from 'react';
import './App.css'
import Header from './components/Header'
import Listofcountries from './components/Listofcountries'
import Seach from './components/Seach'


function App() {
  const[country , setCuntries] = useState([]);
  const [search, setSearch] = useState("A");
  

  return (
    <>
    <Header/>
    <Seach search={search} setSearch={setSearch}/>
    <Listofcountries country={country} setCuntries={setCuntries} search={search}/>
    </>
  )
}

export default App
