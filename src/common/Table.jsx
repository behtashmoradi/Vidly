import React from "react";
import TableHeader from "../common/TableHeader";
import TableBody from "../common/tableBody";
const Table = props => {
  const { columns, data, sortColumn, onSort } = props;
  return (
    <table className="table">
      <TableHeader
        columns={columns}
        onSort={onSort}
        sortColumn={sortColumn}
      ></TableHeader>
      <TableBody data={data} columns={columns}></TableBody>
    </table>
  );
};

export default Table;
