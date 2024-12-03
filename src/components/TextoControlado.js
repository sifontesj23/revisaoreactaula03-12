import React, { useState } from 'react';

const TextoControlado = () => {
  const [texto, setTexto] = useState('');

  const handleChange = (event) => {
    setTexto(event.target.value);
  };

  return (
    <div>
      <input type="text" value={texto} onChange={handleChange} />
      <p>Texto digitado: {texto}</p>
    </div>
  );
};

export default TextoControlado;