import styled from "styled-components";
import { palette } from "styled-theme";
import { transition } from "../../../settings/style-util";
import WithDirection from "../../../settings/withDirection";

const WDContactInfoStyleWrapper = styled.div`
  width: 100%;
  color: ${palette("text", 3)};

  .contactName {
    font-size: 20px;
  }
  .contactGroup {
    color: ${palette("grayscale", 5)};
    border: 1px solid ${palette("border", 2)};
    background-color: ${palette("color", 3)};
    height: 20px;
    border-radius: 10px;
    padding: 0 5px;
  }

  span {
    margin: ${props =>
      props["data-rtl"] === "rtl" ? "0 0 0 70px" : "0 70px 0 0"};
  }

  a {
    font-weight: bold;
    text-decoration: underline;
  }
`;

const ContactInfoStyleWrapper = WithDirection(WDContactInfoStyleWrapper);

export { ContactInfoStyleWrapper };
