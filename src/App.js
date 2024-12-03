import React from 'react';
import InfoCard from './components/InfoCard';
import HobbyList from './components/HobbyList';
import TextoControlado from './components/TextoControlado';
import Contador from './components/Contador';
import './style.css'; // Importando o arquivo CSS

const App = () => {
  const hobbies = ['Ler', 'Escrever', 'Caminhar', 'Cozinhar'];

  return (
    <div className="App">
      <InfoCard title="Título do Cartão" description="Esta é a descrição do cartão." />
      <HobbyList hobbies={hobbies} />
      <TextoControlado />
      <Contador />
    </div>
  );
};

export default App;