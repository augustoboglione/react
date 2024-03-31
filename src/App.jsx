import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer.jsx'
import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer msg="Bienvenido!"/>
    </>
  )
}

export default App
