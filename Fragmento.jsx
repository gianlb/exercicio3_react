import React from 'react';

function FragmentoAninhado() {
  return (
    <>
      <h1>Título do Componente</h1>
      <>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </>
      <>
        <p>Este é um parágrafo</p>
      </>
    </>
  );
}

export default FragmentoAninhado;
