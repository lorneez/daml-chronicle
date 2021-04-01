import React from 'react';
import styled from "styled-components";
import 'antd/dist/antd.css';
import '../../index.css';
import { Card } from 'antd';

const Wrapper = styled('div')`
`

const Col = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
const Address = styled('div')`
  color: blue;
`

const ContactBoxComponents = ({contactType, address}) => {
    return (
        <Card title={contactType}
              headStyle={{"color":"blue"}}
        >
            {address}
        </Card>
    )
};


function ContactPageComponent() {
    return (
        <Wrapper>
            <Col>
                <ContactBoxComponents contactType="Email" address="chronicle@duke.edu"/>
                <ContactBoxComponents contactType="Phone" address="XXX-XXX-XXXX"/>
                <ContactBoxComponents contactType="Twitter" address="something"/>
                <ContactBoxComponents contactType="Lead Dev" address="DAML"/>
            </Col>
        </Wrapper>
    );
};

export default ContactPageComponent;
