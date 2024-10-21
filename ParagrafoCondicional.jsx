import React from 'react';

function ParagrafoCondicional({ isVisible }) {
  return (
    <>
      {isVisible && <p>Este parágrafo é visível!</p>}
    </>
  );
}

export default ParagrafoCondicional;
