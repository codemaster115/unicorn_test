import React from "react";
import { Row, Col } from "antd";

import { ContactInfoStyleWrapper } from "./ContactInfo.style.js";

const ContactInfo = ({ contact }) => {
  return (
    <ContactInfoStyleWrapper>
      <p className="contactName">
        {contact.firstName} {contact.lastName}
      </p>
      <span className="contactGroup">{contact.group}</span>
      <Row justify="start">
        <Col xs={12}>
          <p>
            {contact.address1} {contact.address2}
          </p>
          <p>
            {contact.city}, {contact.state} {contact.zip}
          </p>
        </Col>
        <Col xs={12}>
          <p>M: {contact.mobilePhone}</p>
          <p>H: {contact.homePhone}</p>
        </Col>
      </Row>
      <a>{contact.email}</a>
    </ContactInfoStyleWrapper>
  );
};

export default ContactInfo;
