import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthProvider';
import Botao from '../Botao';


const Logout = () => {
  const navigate = useNavigate();
  const { token, logout } = useAuth();

  const fazerLogout = () => {
    logout();
    navigate('/login');
  };
  
  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div>
      {token ? (
        <div>
          <p>Usuário autenticado!</p>
          <Botao onClick={fazerLogout}>Logout</Botao>
        </div>
         
      ) : (
        <div>
          <h2>Usuário não autenticado.</h2>
          <Botao type="button" onClick={handleLogin}>
            Faça login
          </Botao>
        </div>
      )}
      
    </div>
  );
};

export default Logout;