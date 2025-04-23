import React, { useState } from "react";

const App = () => {
  const [status, setStatus] = useState("Serviço em andamento");

  return (
    <div>
      <h1>Tecnologia Assistência</h1>
      <p>Status do Equipamento: {status}</p>
      <button onClick={() => setStatus("Finalizado")}>Finalizar Serviço</button>
    </div>
  );
};

export default App;
