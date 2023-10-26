import React, { useEffect, useState } from 'react';

const MiApi = ({ searchValue }) => {
    const [indicadores, setIndicadores] = useState([]);

    useEffect(() => {
        // Función asincrónica para realizar la solicitud
        async function fetchData() {
            try {
                const apiUrl = `https://mindicador.cl/api`;
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error('No se pudo obtener datos de la API');
                }
                const data = await response.json();
                // Agregar las propiedades del objeto a un arreglo
                const indicadoresArray = Object.keys(data).map(indicador => data[indicador]);
                // Excluir las primeras 3 tarjetas aquí al cargar los datos
                setIndicadores(indicadoresArray.slice(3));
            } catch (error) {
                console.error('Error al obtener datos de la API:', error);
            }
        }

        // Llama a la función asincrónica
        fetchData();
    }, []);

    // Filtra los indicadores según el término de búsqueda (searchValue)
    const indicadoresFiltrados = indicadores.filter(indicador =>
        indicador.nombre.toLowerCase().includes(searchValue.toLowerCase())
    );

    // Función para cambiar la dirección del orden y ordenar los indicadores
    const handleSort = (direction) => {

        // Ordena los indicadores según la dirección actual del orden
        const sortedIndicadores = [...indicadoresFiltrados].sort((a, b) => {
            if (direction === 'asc') {
                return a.nombre.localeCompare(b.nombre);
            } else {
                return b.nombre.localeCompare(a.nombre);
            }
        });

        setIndicadores(sortedIndicadores);
    };

    return (
        <div>
            <div className="button-container my-3">
                <button className='mx-1' onClick={() => handleSort('asc')}>Ascendente</button>
                <button className='mx-1' onClick={() => handleSort('desc')}>Descendente</button>
            </div>
            <div className="card-container">
                {indicadoresFiltrados.map(indicador => (
                    <div className="card mb-3" key={indicador.codigo}>
                        <div className="card-body">
                            <h3 className="card-title">{indicador.nombre}</h3>
                            <p className="card-text">Valor: {indicador.valor}</p>
                            <p className="card-text">Fecha: {indicador.fecha}</p>
                            <p className="card-text">Unidad de medida: {indicador.unidad_medida}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MiApi;
