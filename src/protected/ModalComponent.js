import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Modal } from 'antd';

function ModalComponent(props) {
    const [visible, setVisible] = useState(true);

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


