import React from "react";
import IntlMessages from "../../../components/utility/intlMessages";
import { HeaderStyleWrapper } from "./Header.style";

const Header = ({ label, leftIcon }) => {
  return (
    <HeaderStyleWrapper>
      <i className={leftIcon} />
      <IntlMessages id={label} />
    </HeaderStyleWrapper>
  );
};

export default Header;
