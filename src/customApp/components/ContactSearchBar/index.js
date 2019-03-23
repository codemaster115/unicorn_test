import React, { Component } from "react";
import { Row, Col } from "antd";

import Input, {
  InputSearch,
  InputGroup
} from "../../../components/uielements/input";
import Select, { SelectOption } from "../../../components/uielements/select";
import {
  ContactSearchBarStyleWrapper,
  SearchItemWrapper,
  LetterItem
} from "./ContactSearchBar.style.js";
import basicStyle from "../../../settings/basicStyle";

const Option = SelectOption;
const { rowStyle, colStyle, gutter } = basicStyle;

const letters = [
  "ALL",
  "A-C",
  "D-F",
  "G-I",
  "J-L",
  "M-O",
  "P-R",
  "S-U",
  "V-Z",
  "0-9"
];

export class ContactSearchBar extends Component {
  render() {
    return (
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col lg={6} md={12} sm={24} xs={12} style={colStyle}>
          <InputSearch placeholder="Type to search" />
        </Col>
        <Col lg={6} md={12} sm={24} xs={12} style={colStyle}>
          <SearchItemWrapper>
            <span className="label">Type</span>
            <Select
              showSearch={true}
              placeholder="<All>"
              style={{ width: "100%" }}
            >
              <Option value="Zhejiang">Zhejiang</Option>
              <Option value="Jiangsu">Jiangsu</Option>
            </Select>
          </SearchItemWrapper>
        </Col>
        <Col lg={6} md={12} sm={24} xs={12} style={colStyle}>
          <SearchItemWrapper>
            <span className="label">Tag/Group</span>
            <Select
              showSearch={true}
              placeholder="<All>"
              style={{ width: "100%" }}
            >
              <Option value="Zhejiang">Zhejiang</Option>
              <Option value="Jiangsu">Jiangsu</Option>
            </Select>
          </SearchItemWrapper>
        </Col>
        <Col lg={6} md={12} sm={24} xs={12} style={colStyle}>
          <SearchItemWrapper>
            <span className="label">Assigned To</span>
            <Select
              showSearch={true}
              placeholder="<All>"
              style={{ width: "100%" }}
            >
              <Option value="Zhejiang">Zhejiang</Option>
              <Option value="Jiangsu">Jiangsu</Option>
            </Select>
          </SearchItemWrapper>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24} style={colStyle}>
          <SearchItemWrapper>
            {letters.map(letter => (
              <LetterItem>
                <span>{letter}</span>
              </LetterItem>
            ))}
          </SearchItemWrapper>
        </Col>
        <Col lg={6} md={12} sm={24} xs={12} style={colStyle}>
          <SearchItemWrapper>
            <span className="label">Added</span>
            <Select
              showSearch={true}
              placeholder="<All>"
              style={{ width: "100%" }}
            >
              <Option value="Zhejiang">Zhejiang</Option>
              <Option value="Jiangsu">Jiangsu</Option>
            </Select>
          </SearchItemWrapper>
        </Col>
        <Col lg={6} md={12} sm={24} xs={12} style={colStyle}>
          <SearchItemWrapper>
            <span className="label">Status</span>
            <Select
              showSearch={true}
              placeholder="<All>"
              style={{ width: "100%" }}
            >
              <Option value="Zhejiang">Zhejiang</Option>
              <Option value="Jiangsu">Jiangsu</Option>
            </Select>
          </SearchItemWrapper>
        </Col>
      </Row>
    );
  }
}

export default ContactSearchBar;
