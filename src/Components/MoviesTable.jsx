import React, { Component } from "react";
import Table from "../common/Table";
import { Link } from "react-router-dom";
class MoviesTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title"
      //,      content: item => <Link to={`/movies/${item._id}`}>{item.title}</Link>
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "Delete",
      content: movie => (
        <button
          onClick={() => {
            this.props.onDelete(movie);
          }}
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
