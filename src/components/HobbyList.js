import React from 'react';

const HobbyList = ({ hobbies }) => {
  return (
    <div className="hobby-list">
      <h3>Lista de Hobbies</h3>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};

export default HobbyList;