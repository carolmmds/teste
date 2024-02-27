import { styled } from "styled-components";

const BotaoEstilizado = styled.button`
    background-color: #7D6BE6;
    border-radius: 8px;
    font-weight: 700;
    font-size: 16px;
    padding: 16px;
    border: none;
    cursor: pointer;
    color: #fff;
    margin-top: 32px;
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
    
    &:hover {
        background-color: #5E50AB;
        color: #fff;
        transform: scale(1.1);
        
}    `
const Botao = (props) => {
    return (
        <BotaoEstilizado onClick={props.onClick}>
            {props.children}
        </BotaoEstilizado>
    )
}

export default Botao;
