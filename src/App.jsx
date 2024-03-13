import React, { useState } from 'react';
import Buscador from './Buscador';
import Tabla from './Tabla';
import Paginacion from './paginacion';
import data from './data';

const App = () => {
  const [search, setSearch] = useState('');
  const [clasificar, setClasificar] = useState('');
  const [datosMostrados, setDatosMostrados] = useState([]);
  const [informacionRegistros, setInformacionRegistros] = useState('');
  const [limite, setLimite] = useState(5); // Estado para el limite de registros por pagina

  const handleSearch = (search) => {
    setSearch(search);
  };

  const handleClasificar = (clasificar) => {
    setClasificar(clasificar);
  };

  const handleLimiteChange = (nuevoLimite) => {
    const slicedData = data.slice(0, parseInt(nuevoLimite, 10)); // Mostrar los datos segun el nuevo limite
    setLimite(parseInt(nuevoLimite, 10)); // Actualizar el estado del limite
    setDatosMostrados(slicedData);
    setInformacionRegistros(`${Math.min(slicedData.length, parseInt(nuevoLimite, 10))} de ${data.length}`); // Mostrar informacion de registros
  };
  
  const filteredData = data.filter((item) =>
    item.nombre.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='bg-center'>
      <select value={limite.toString()} onChange={(e) => handleLimiteChange(e.target.value)}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
      <Buscador onSearch={handleSearch} />
      <Tabla data={datosMostrados} />
      <Paginacion 
        data={filteredData}
        limite={limite}
        pagina={1}
        setPagina={() => {}}
        totalPaginas={Math.ceil(filteredData.length / limite)}
        handleLimiteChange={handleLimiteChange}
        informacionRegistros={informacionRegistros}
      />
    </div>
  );
};

export default App;
