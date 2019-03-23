import React, { Component } from "react";
// import TableWrapper, { CustomizedTableWrapper } from "../antTable.style";
import Table from "../../../../components/uielements/table";
import Form from "../../../../components/uielements/form";
import IntlMessages from "../../../../components/utility/intlMessages";
import {
  DateCell,
  ImageCell,
  LinkCell,
  TextCell
} from "../../../../components/tables/helperCells";

const FormItem = Form.Item;

const renderCell = (object, type, key) => {
  if (!key) return object;

  const value = object[key];
  switch (type) {
    case "ImageCell":
      return ImageCell(value);
    case "DateCell":
      return DateCell(value);
    case "LinkCell":
      return LinkCell(value);
    default:
      return TextCell(value);
  }
};

const columns = [
  {
    title: <IntlMessages id="table_contact.title.name" />,
    key: "name",
    width: 150,
    render: object =>
      renderCell(`${object.firstName} ${object.lastName}`, "TextCell")
  },
  {
    title: <IntlMessages id="table_contact.title.address" />,
    key: "address",
    width: 150,
    render: object =>
      renderCell(
        `${object.address1} ${object.address2} ${object.city} ${object.state} ${
          object.zip
        }`,
        "TextCell"
      )
  },
  {
    title: <IntlMessages id="table_contact.title.company" />,
    key: "company",
    width: 200,
    render: object => renderCell(object, "TextCell", "company")
  },
  {
    title: <IntlMessages id="table_contact.title.title" />,
    key: "title",
    width: 200,
    render: object => renderCell(object, "TextCell", "title")
  },
  {
    title: <IntlMessages id="table_contact.title.group_type" />,
    key: "group",
    width: 200,
    render: object => renderCell(object, "TextCell", "group")
  },
  {
    title: <IntlMessages id="table_contact.title.mobile" />,
    key: "mobile",
    width: 150,
    render: object => renderCell(object, "TextCell", "mobilePhone")
  },
  {
    title: <IntlMessages id="table_contact.title.office" />,
    key: "office",
    width: 150,
    render: object => renderCell(object, "TextCell", "officePhone")
  },
  {
    title: <IntlMessages id="table_contact.title.email" />,
    key: "email",
    width: 200,
    render: object => renderCell(object, "LinkCell", "email")
  }
];

export default class ContactTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bordered: undefined,
      loading: undefined,
      pagination: true,
      size: "default",
      rowSelection: {}
    };
  }
  render() {
    return (
      // <CustomizedTableWrapper className="isoCustomizedTableWrapper">
      <Table
        {...this.props}
        {...this.state}
        columns={columns}
        dataSource={this.props.dataList}
        className="isoCustomizedTable"
      />
      // </CustomizedTableWrapper>
    );
  }
}
