import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Pagination from "../common/pagination";
import { Paginate } from "../utils/paginate";
import ListGroup from "../common/listGroup";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1
  };

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies: movies });
  };
  componentDidMount() {
    const genres = [{ name: "All movies" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  handleItemSelect = item => {
    this.setState({ currentPage: 1, selectedGenre: item });
  };
  render() {
    const allMovies = this.state.movies;
    const filtered =
      this.state.selectedGenre && this.state.selectedGenre._id
        ? allMovies.filter(m => m.genre._id == this.state.selectedGenre._id)
        : allMovies;
    var movies = Paginate(
      filtered,
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
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">Stock</th>
                <th scope="col">Rate</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {movies.map(movie => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <button
                      onClick={() => this.handleDelete(movie)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
