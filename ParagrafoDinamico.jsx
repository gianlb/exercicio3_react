import React from 'react';

function ParagrafoDinamico({ isHighlighted }) {
  const estiloParagrafo = {
    color: isHighlighted ? 'red' : 'black',
    fontSize: '18px',
    margin: '10px 0'
  };

  return (
    <p style={estiloParagrafo}>
      Este parágrafo tem seu estilo alterado!
    </p>
  );
}

export default ParagrafoDinamico;
