import { useState } from 'react'
import './App.css'
import MiApi from './components/MiApi'
import 'bootstrap/dist/css/bootstrap.min.css';
import Buscador from './components/Buscador';

function App() {
  const [count, setCount] = useState(0)
  const [searchValue, setSearchValue] = useState('')

  const handleSearch = (value) => {
    // Agregar el nuevo colaborador a la matriz
    setSearchValue(value);
  };
  return (
    <>
      <div>
        <h1 className='mb-2'>Buscador de indicadores</h1>
        <Buscador searchValue={handleSearch} />
        <MiApi searchValue={searchValue} />
      </div>
    </>
  )
}

export default App
