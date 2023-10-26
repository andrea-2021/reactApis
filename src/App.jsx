import { useState } from 'react'
import './App.css'
import MiApi from './components/MiApi'
import Buscador from './components/Buscador';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [searchValue, setSearchValue] = useState('') // constante maneja el valor de la busqueda 

  const handleSearch = (value) => {
    setSearchValue(value);
  };
  return (
    <>
      <div>
        <h1 className='mb-2'>Buscador de indicadores económicos</h1>
        <Buscador searchValue={handleSearch} />
        <MiApi searchValue={searchValue} />
      </div>
    </>
  )
}

export default App
