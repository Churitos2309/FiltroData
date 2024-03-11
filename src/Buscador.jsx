import React, { useState } from 'react';

const Buscador = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Buscar"
      value={search}
      onChange={handleChange}
    />
  );
};

export default Buscador;