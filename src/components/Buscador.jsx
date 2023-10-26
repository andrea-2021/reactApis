import React, { useState } from 'react'

const Buscador = ({ searchValue }) => {
    const [value, setValue] = useState('')

    const handleChange = (event) => {
        console.log(event);
        const newValue = event.target.value;
        setValue(newValue);

        // Llama a la función handleSearch con el nuevo valor
        searchValue(newValue);
    };

    return (
        <div className='mb-5'>
            <input
                type="text"
                className="form-control w-75 mx-auto"
                aria-label="Small"
                placeholder='Busca Aquí ...'
                aria-describedby="inputGroup-sizing-sm"
                value={value} // Vincula el valor del input al estado local
                onChange={handleChange} // Agrega el evento onChange
            />
        </div>
    )
}

export default Buscador