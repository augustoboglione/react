import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer.jsx'
import './App.css'

const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer msg={"Welcome!"}/>
    </>
  )
}

export default App