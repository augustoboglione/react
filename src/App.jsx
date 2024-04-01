import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer.jsx'
import './App.css'

const App = () => {
  return (
    <>
      <NavBar/>
      <main>
        <ItemListContainer msg="Bienvenido!"/>
      </main>
    </>
  )
}

export default App
