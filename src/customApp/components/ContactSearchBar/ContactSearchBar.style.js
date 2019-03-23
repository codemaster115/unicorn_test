import styled from "styled-components";
import { palette } from "styled-theme";
import { transition } from "../../../settings/style-util";
import WithDirection from "../../../settings/withDirection";

const WDContactSearchBarStyleWrapper = styled.div`
  width: 100%;
`;

const SearchItemWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  .label {
    min-width: 80px;
    margin-right: 5px;
    display: inline-block;
  }
`;

const LetterItem = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  padding: 0 10px;
  border: 0px solid ${palette('border', 3)};
  border-width: 1px 1px 1px 0;
  span {
    display: inline-block;
  }

  &:first-child {
    border-left-width: 1px;
  }
`;

const ContactSearchBarStyleWrapper = WithDirection(
  WDContactSearchBarStyleWrapper
);

export { ContactSearchBarStyleWrapper, SearchItemWrapper, LetterItem };
