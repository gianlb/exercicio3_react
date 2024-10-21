import React from 'react';

function Card({ children }) {
  const cardStyle = {
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '20px',
    maxWidth: '400px',
  };

  return <div style={cardStyle}>{children}</div>;
}

export default Card;
