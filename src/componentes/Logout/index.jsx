import React from 'react';
import { styled } from "styled-components";
import { useNavigate } from 'react-router-dom';
import Api from "../../api";
import { useAuth } from '../../AuthProvider';
import Botao from '../Botao';
import Login from '../Login';

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