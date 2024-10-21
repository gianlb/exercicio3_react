import React from 'react';

function Lista({ nomes }) {
  return (
    <ul>
      {nomes.map((nome, index) => (
        <li key={index}>{nome}</li> 
      ))}
    </ul>
  );
}

export default Lista;
