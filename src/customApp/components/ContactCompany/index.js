import React from "react";
import { Row, Col } from "antd";

import { ContactCompanyStyleWrapper } from "./ContactCompany.style.js";

const ContactCompany = ({ contact }) => {
  return (
    <ContactCompanyStyleWrapper>
      <p className="contactName">{contact.company}</p>
    </ContactCompanyStyleWrapper>
  );
};

export default ContactCompany;
