import styled from "styled-components";
import { palette } from "styled-theme";
import { transition } from "../../../settings/style-util";
import WithDirection from "../../../settings/withDirection";

const WDHeaderStyleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border: 1px solid ${palette("border", 4)};
  background-color: ${palette("primary", 0)};
  padding: 20px 15px;
  margin-bottom: 15px;
  margin-right: 17px;
  color: ${palette("secondary", 6)};
  white-space: nowrap;

  i {
    font-size: 20px;
    color: inherit;
    margin: ${props =>
      props["data-rtl"] === "rtl" ? "0 0 0 10px" : "0 10px 0 0"};
    width: 18px;
    ${transition()};
  }

  span {
    font-size: 20px;
    color: inherit;
    margin: ${props =>
      props["data-rtl"] === "rtl" ? "0 0 0 70px" : "0 70px 0 0"};
  }
`;

const HeaderStyleWrapper = WithDirection(WDHeaderStyleWrapper);

export { HeaderStyleWrapper };
