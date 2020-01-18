import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "../Components/MoviesTable";
import Pagination from "../common/pagination";
import { Paginate } from "../utils/paginate";
import ListGroup from "../common/listGroup";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" }
  };

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies: movies });
  };
  componentDidMount() {
    const genres = [{ _id: "", name: "All movies" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  handleItemSelect = item => {
    this.setState({ currentPage: 1, selectedGenre: item });
  };
  handleSort = sortColumn => {
    this.setState({ sortColumn: sortColumn });
  };
  render() {
    const allMovies = this.state.movies;
    const sortColumn = this.state.sortColumn;
    const filtered =
      this.state.selectedGenre && this.state.selectedGenre._id
        ? allMovies.filter(m => m.genre._id === this.state.selectedGenre._id)
        : allMovies;
    const sortedList = _.sortBy(filtered, [
      sortColumn.path,
      [sortColumn.order]
    ]);
    var movies = Paginate(
      sortedList,
      this.state.currentPage,
      this.state.pageSize
    );
    const { length: count } = this.state.movies;
    if (count === 0) {
      return <p>There are no movie in the Database</p>;
    }

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleItemSelect}
          />
        </div>
        <div className="col">
          <p>There are {filtered.length} movie(s) in the database</p>
          <MoviesTable
            movies={movies}
            sortColumn={this.state.sortColumn}
            onDelete={movie => this.handleDelete(movie)}
            onSort={path => this.handleSort(path)}
          ></MoviesTable>
          {
            <Pagination
              itemCount={filtered.length}
              pageSize={this.state.pageSize}
              currentPage={this.state.currentPage}
              onPageChange={this.handlePageChange}
            />
          }
        </div>
      </div>
    );
  }
}

export default Movies;
