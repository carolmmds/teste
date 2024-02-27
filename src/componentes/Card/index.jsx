import React from 'react';
import styled from 'styled-components';

const CardEstilizado = styled.div`
  border-radius: 8px;
  width: 300px;
  padding: 16px;
  margin: 20px auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
  background-color: rgba(74, 77, 133, 0.87);

`;

const Card = (props) => {
  return (
    <CardEstilizado>
      {props.children}
    </CardEstilizado>
  );
};

export default Card;