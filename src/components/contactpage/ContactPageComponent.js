import React from 'react';
import styled from "styled-components";
import 'antd/dist/antd.css';
import '../../index.css';
import { Card } from 'antd';

const Wrapper = styled('div')`
`

const Row = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 25px;
`
const Address = styled('div')`
  color: blue;
`

const ContactBoxComponents = ({contactType, address}) => {
    return (
        <Card title={contactType}
              style={{ "width":"25%"}}
              headStyle={{"color":"blue"}}
        >
            {address}
        </Card>
    )
};


function ContactPageComponent() {
    return (
        <Wrapper>
            <Row>
                <ContactBoxComponents contactType="Email" address="chronicle@duke.edu"/>
                <ContactBoxComponents contactType="Phone" address="XXX-XXX-XXXX"/>
            </Row>
            <Row>
                <ContactBoxComponents contactType="Twitter" address="something"/>
                <ContactBoxComponents contactType="Lead Dev" address="DAML"/>
            </Row>
        </Wrapper>
    );
};

export default ContactPageComponent;
