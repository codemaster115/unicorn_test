import React, { Component } from "react";
// import TableWrapper, { CustomizedTableWrapper } from "../antTable.style";
import AntTable from "../../../components/uielements/table";
import Form from "../../../components/uielements/form";
const FormItem = Form.Item;

const showHeader = true;
const scroll = { y: 240 };

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bordered: true,
      loading: undefined,
      pagination: true,
      size: "default",
      showHeader,
      rowSelection: {},
      scroll: undefined
    };
  }
  render() {
    return (
      // <CustomizedTableWrapper className="isoCustomizedTableWrapper">
        <AntTable
          {...this.state}
          {...this.props}
          columns={this.props.tableInfo.columns}
          dataSource={this.props.dataList}
          className="isoCustomizedTable"
        />
      // </CustomizedTableWrapper>
    );
  }
}
