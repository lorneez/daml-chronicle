import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

// Styled Components
const Wrapper = styled("div")`s
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const Column = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
`;

const Modal = props => {
  return ReactDOM.createPortal(
    <Wrapper>
      <Column>
        {props.title}
        {props.buttons}
      </Column>
    </Wrapper>,
    document.querySelector('#modal')
  );
};

export default Modal;


