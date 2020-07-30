import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Modal } from 'antd';

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

function ModalComponent(props) {
    const [visible, setVisible] = useState(true);

    function showModal() {
        setVisible(true);
    };

    function handleOk(url) {
        setVisible(false);
        window.location.href = url;
    };

    function handleCancel() {
        setVisible(false);
        window.location.href = '/';
    };

    return ReactDOM.createPortal(
        <Modal
            title={props.title}
            visible={visible}
            okText={props.ok}
            cancelText={props.cancel}
            onOk={() => handleOk(props.url)}
            onCancel={() => handleCancel()}
        >
            <p>Your session has expired. Please reauthenticate your login.</p>
        </Modal>,
        document.querySelector('#modal')
    );
}

export default ModalComponent;


