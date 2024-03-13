// Paginacion.js
import React from 'react';

const Paginacion = ({
    data,
    limite,
    pagina,
    setPagina,
    totalPaginas,
    handleLimiteChange,
    informacionRegistros
}) => {
    return (
        <div>
            <div>{informacionRegistros}</div>
            <div>Total de registros: {data.length}</div>
        </div>
    );
};

export default Paginacion;
