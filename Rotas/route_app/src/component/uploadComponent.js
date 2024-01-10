import React, { useState } from 'react';

function UploadComponent() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Por favor, selecione um arquivo primeiro!');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:3100/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Arquivo enviado com sucesso!');
      } else {
        alert('Falha no envio do arquivo.');
      }
    } catch (error) {
      console.error('Erro ao enviar o arquivo:', error);
      alert('Erro ao enviar o arquivo.');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Enviar Arquivo</button>
    </div>
  );
}

export default UploadComponent;
