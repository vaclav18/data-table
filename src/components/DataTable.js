import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import "../styles/components/_table.css";

class DataTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
    this.custClass = props.custClass;
    this.custColumns = props.custColumns;
    this.renderEditable = this.renderEditable.bind(this);
  }

  renderEditable(cellInfo) {
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const data = [...this.state.data];
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          this.setState({ data });
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.data[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
  }
  render() {
    const { data } = this.state;
    return (
      <ReactTable
        className={this.custClass}
        data={data}
        filterable
        defaultPageSize={10}
        defaultFilterMethod={(filter, row) =>
          String(row[filter.id]) === filter.value}
        columns={this.custColumns} 
      />
    );
  }
}

export default DataTable;
