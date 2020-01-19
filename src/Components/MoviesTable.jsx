import React, { Component } from "react";
import Table from "../common/Table";
class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "Delete",
      content: item => (
        <button
          onClick={() => this.props.onDelete(item)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      )
    }
  ];
  render() {
    const { movies, onDelete, onSort } = this.props;
    return (
      <Table
        data={movies}
        onSort={onSort}
        columns={this.columns}
        sortColumn={this.props.sortColumn}
      ></Table>
    );
  }
}

export default MoviesTable;
