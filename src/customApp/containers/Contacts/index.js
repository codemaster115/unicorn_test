import React, { Component } from "react";
import { Row, Col } from "antd";
import { connect } from "react-redux";
import LayoutContentWrapper from "../../../components/utility/layoutWrapper";
import ContactTable from "../../components/Tables/ContactTable";
import Header from "../../components/Header";
import Box from "../../../components/utility/box";
import ContactInfo from "../../components/ContactInfo";
import ContactCompany from "../../components/ContactCompany";

import basicStyle from "../../../settings/basicStyle";

import actions from "../../redux/contacts/actions";
import ContactSearchBar from "../../components/ContactSearchBar";

class Contacts extends Component {
  onRow = (record, rowIndex) => {
    const { setHoveredContact } = this.props;

    return {
      onMouseEnter: () => {
        setHoveredContact(record);
      }
    };
  };

  render() {
    const { rowStyle, colStyle, gutter } = basicStyle;
    const { hoveredContact, list } = this.props.contacts;
    return (
      <LayoutContentWrapper>
        <Header label={"sidebar.contacts"} leftIcon={"ion-android-person"} />
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col lg={6} md={12} sm={24} xs={24} style={colStyle}>
            <Box style={{ minHeight: 220 }}>
              {hoveredContact && <ContactInfo contact={hoveredContact} />}
            </Box>
          </Col>
          <Col lg={6} md={12} sm={24} xs={24} style={colStyle}>
            <Box style={{ minHeight: 220 }}>
              {hoveredContact && <ContactCompany contact={hoveredContact} />}
            </Box>
          </Col>
          <Col lg={6} md={12} sm={24} xs={24} style={colStyle}>
            <Box style={{ minHeight: 220 }}>
              <span>Ted Jones</span>
            </Box>
          </Col>
          <Col lg={6} md={12} sm={24} xs={24} style={colStyle}>
            <Box style={{ minHeight: 220 }}>
              <span>Ted Jones</span>
            </Box>
          </Col>
        </Row>
        {/* <Row style={rowStyle} gutter={gutter} justify="start"> */}
          {/* <Col span={24}style={colStyle}> */}
            <ContactSearchBar />
          {/* </Col> */}
        {/* </Row> */}
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col style={colStyle}>
            <ContactTable dataList={list} onRow={this.onRow} />
          </Col>
        </Row>
      </LayoutContentWrapper>
    );
  }
}

const mapStateToProps = ({ contacts }) => ({
  contacts
});

const mapDispatchToProps = {
  setHoveredContact: actions.setHoveredContact
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contacts);
