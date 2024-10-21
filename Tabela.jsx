import React from 'react';

function Tabela({ dados }) {
  return (
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>ID</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Nome</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Idade</th>
        </tr>
      </thead>
      <tbody>
        {dados.map((item) => (
          <tr key={item.id}>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.id}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.nome}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.idade}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tabela;
