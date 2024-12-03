import React, { useState } from 'react';

const Contador = () => {
  const [contador, setContador] = useState(0);

  const handleClick = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Clique aqui</button>
      <p>Você clicou {contador} vezes</p>
    </div>
  );
};

export default Contador;