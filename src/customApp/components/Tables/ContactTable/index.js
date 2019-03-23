import React, { Component } from "react";
import { Icon } from "antd";
// import TableWrapper, { CustomizedTableWrapper } from "../antTable.style";
import Table from "../../../../components/uielements/table";
import IntlMessages from "../../../../components/utility/intlMessages";
import {
  DateCell,
  ImageCell,
  LinkCell,
  TextCell
} from "../../../../components/tables/helperCells";
import { FilterDropdown } from "../../../../components/tables/helperCells";

import TableWrapper from "../table.style";

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
      dataList: this.props.dataList,
      pagination: true,
      size: "default",
      rowSelection: {}
    };
  }

  handleSearch = (selectedKeys, confirm) => {
    confirm();
    this.setState({ searchText: selectedKeys[0] });
  };

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => (
      <FilterDropdown
        searchText={selectedKeys[0]}
        onInputChange={e =>
          setSelectedKeys(e.target.value ? [e.target.value] : [])
        }
        placeholder={`Search ${dataIndex}`}
        onSearch={() => this.handleSearch(selectedKeys, confirm)}
      />
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) => {
      var text = record[dataIndex];
      if (dataIndex === "name") {
        text = `${record.firstName} ${record.lastName}`;
      } else if (dataIndex === "address") {
        text = `${record.address1} ${record.address2} ${record.city} ${
          record.state
        } ${record.zip}`;
      }
      return text
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase());
    },
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        document.getElementById("tableFilterInput").focus();
      }
    }
  });

  render() {
    const filterColumns = columns.map(column => ({
      ...column,
      ...this.getColumnSearchProps(column.key)
    }));
    return (
      <TableWrapper
        {...this.props}
        {...this.state}
        bordered
        columns={filterColumns}
        dataSource={this.props.dataList}
        className="isoSearchableTable"
      />
    );
  }
}
