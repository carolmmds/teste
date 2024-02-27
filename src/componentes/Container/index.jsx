import React from 'react';
import styled from 'styled-components';


const ContainerEstilizado = styled.div`
display: flex;
flex-direction: row;
gap: 8px;


`;

const Container = (props) => {
  return (
    <ContainerEstilizado>
      {props.children}
    </ContainerEstilizado>
  );
};

export default Container;