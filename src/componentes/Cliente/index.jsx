import React, { useState } from 'react';
import CampoTexto from '../CampoTexto';
import Botao from '../Botao';
import { useNavigate } from 'react-router-dom';
import Api from "../../api";
import { useAuth } from '../../AuthProvider';
import Title from '../Title';
import Container from '../Container';
import Logout from '../Logout';

const Cliente = () => {
    const { token, setAuthToken } = useAuth();

    const [clientData, setClientData] = useState({
      name: '',
      email: '',
      cpf: '',
    });
    const handleCreateClient = async () => {
        try {
          if (!token) {
            alert('Você precisa estar autenticado para criar um cliente.');
            return;
          }    
          const response = await Api.createClient(token, clientData);
    
          if (response.status === 201) {
            console.log('Cliente criado:', response.data);    
            setClientData({
              name: '',
              email: '',
              cpf: '',
            });
          } else if (response.status === 401) {
            alert(`É preicso estar autenticado para criar um cliente`);
          } else {
            alert('Erro desconhecido ao criar o cliente');
          }
        } catch (error) {
          console.error('Erro na solicitação:', error);
        }
      };
    return (
        <div>
        <Title text="Cadastre os clientes" labelColor="#000"/>
        <Container>
            <CampoTexto
                type="text"
                label="Nome"
                id="name"
                value={clientData.name}
                onChange={(value) => setClientData({ ...clientData, name: value })}
                labelColor="#000" 
            />
            <CampoTexto
                type="text"
                label="E-mail"
                id="email"
                value={clientData.email}
                onChange={(value) => setClientData({ ...clientData, email: value })}
                labelColor="#000"
            />
            <CampoTexto
                type="number"
                label="CPF"
                id="cpf"
                value={clientData.cpf}
                onChange={(value) => setClientData({ ...clientData, cpf: value })}
                labelColor="#000"               
            />
        </Container>
            <Botao onClick={handleCreateClient}>Cadastrar cliente</Botao>
            <Logout/>
        </div>
    )
}

export default Cliente

