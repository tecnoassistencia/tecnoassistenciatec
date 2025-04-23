import React, { useState } from 'react';

function App() {
  const [status, setStatus] = useState('Em andamento');
  const [fotos, setFotos] = useState<string[]>([]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Tecno Assistência</h1>
      <h2>Status do Serviço: {status}</h2>

      <h3>Fotos do Serviço</h3>
      <ul>
        {fotos.length > 0 ? (
          fotos.map((foto, index) => (
            <li key={index}>
              <img src={foto} alt={`Foto ${index + 1}`} style={{ width: '100px' }} />
            </li>
          ))
        ) : (
          <p>Não há fotos disponíveis.</p>
        )}
      </ul>

      <button onClick={() => setStatus('Finalizado')}>Finalizar Serviço</button>

      {/* Exemplo de input para adicionar novas fotos */}
      <input
        type="text"
        placeholder="Links das fotos (separadas por vírgula)"
        onChange={(e) => setFotos(e.target.value.split(','))}
      />
    </div>
  );
}

export default App;
