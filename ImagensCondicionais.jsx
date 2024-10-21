import React from 'react';

function ImagensCondicionais({ urls }) {
  return (
    <div>
      {urls.map((url, index) => (
        url ? (  
          <img key={index} src={url} alt={`Imagem ${index + 1}`} style={{ margin: '10px', width: '200px', height: 'auto' }} />
        ) : null  
      ))}
    </div>
  );
}

export default ImagensCondicionais;
