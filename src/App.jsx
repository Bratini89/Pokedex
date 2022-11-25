
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import InputName from './components/InputName'
import Pokedex from './components/Pokedex'
import PokedexId from './components/PokedexId'
import ProtectedRoutes from './components/ProtectedRoutes'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ProgressBar } from 'react-bootstrap'

function App() {
  

  return (
    
    <div className='app'>
    <HashRouter >
      <Routes>
        <Route path="/" element={<InputName />} />
        <Route element={<ProtectedRoutes />}>
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/pokedex/:id" element={<PokedexId />} />
        </Route>
      </Routes>
    </HashRouter> 
    </div>
  
  
  )
}

export default App
