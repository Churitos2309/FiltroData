import React, { useState } from 'react';
import Buscador from './Buscador';
import Tabla from './Tabla';
import data from './data';


const App = () => {
  const [search, setSearch] = useState('');

  const handleSearch = (search) => {
    setSearch(search);
  };

  const filteredData = data.filter((item) =>
    item.nombre.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Buscador onSearch={handleSearch} />
      <Tabla data={filteredData} />
    </div>
  );
};

export default App;




