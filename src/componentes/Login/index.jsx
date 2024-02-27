import React, { useState } from 'react';
import CampoTexto from '../CampoTexto';
import Botao from '../Botao';
import { useNavigate } from 'react-router-dom';
import Api from "../../api";
import { useAuth } from '../../AuthProvider';
import Title from '../Title';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setAuthToken } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async () => {

        try {

            const response = await Api.login(email, password);
            if (response.status === 201) {
                setAuthToken(response.data.access_token);
                navigate('/cliente');
            } else if (response.status === 401) {
                alert(`Erro de autenticação: ${response.data.message}`);
            } else {
                alert('Erro desconhecido');
            }
        } catch (error) {
            console.error('Erro na solicitação:', error);
            alert('Erro ao entrar');
        }
    };

    return (
        <div>
             <Title text="LOGIN"/>
            <CampoTexto
                type="text"
                label="E-mail"
                placeholder="Digite seu e-mail"
                onChange={(value) => setEmail(value)}
                value={email}
                required
            />
            <CampoTexto
                type="password"
                label="Senha"
                placeholder="Digite sua senha"
                onChange={(value) => setPassword(value)}
                value={password}
                required
            />
            <Botao type="button" onClick={handleLogin}>
                Entrar
            </Botao>
        </div>
    );
};

export default Login;
