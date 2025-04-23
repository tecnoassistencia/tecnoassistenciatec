import { useState } from 'react';
import './App.css';

function App() {
  const [osCode, setOsCode] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginOs = () => {
    if (osCode) {
      setIsLoggedIn(true); // Simula que o login com a OS foi feito
      alert(`Acessando a OS ${osCode}`);
      // Aqui você pode redirecionar ou mostrar o status da OS
    } else {
      alert('Por favor, insira o código da OS.');
    }
  };

  const handleLoginAdmin = () => {
    if (adminPassword === 'admin123') {
      setIsAdmin(true);
      setIsLoggedIn(true); // Simula que o login foi feito com admin
      alert('Entrando como administrador!');
      // Aqui você pode redirecionar para o painel admin
    } else {
      alert('Senha do administrador incorreta!');
    }
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <div>
          <h1>Bem-vindo ao Sistema de Acompanhamento de OS</h1>

          <div>
            <h2>Entrar como Cliente</h2>
            <input
              type="text"
              placeholder="Código da OS"
              value={osCode}
              onChange={(e) => setOsCode(e.target.value)}
            />
            <button onClick={handleLoginOs}>Acessar OS</button>
          </div>

          <div>
            <h2>Entrar como Administrador</h2>
            <input
              type="password"
              placeholder="Senha Administrador"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
            />
            <button onClick={handleLoginAdmin}>Entrar como Admin</button>
          </div>
        </div>
      ) : (
        <div>
          <h1>{isAdmin ? 'Painel do Administrador' : `Status da OS ${osCode}`}</h1>
          {/* Aqui pode ser redirecionado ou mostrado o conteúdo específico */}
        </div>
      )}
    </div>
  );
}

export default App;
