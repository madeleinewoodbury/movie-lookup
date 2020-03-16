import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MovieContext from '../../context/movie/movieContext';
import Spinner from '../layout/Spinner';

const Movie = ({ match }) => {
  const movieContext = useContext(MovieContext);
  const { movie, loading, getMovie } = movieContext;
  useEffect(() => {
    getMovie(match.params.id);
    // eslint-disable-next-line
  }, []);
  return loading ? (
    <Spinner />
  ) : (
    <div className="movie my-1">
      <Link to="/" className="btn btn-secondary">
        Back to Search
      </Link>
      <h1 className="my-1">{movie.Title}</h1>

      <div className="movie-content">
        <div className="poster">
          <img src={movie.Poster} alt={`${movie.Title} poster`} />
        </div>
        <div className="info">
          <p>
            <strong>Year: </strong> {movie.Year}
          </p>
          <p>
            <strong>Released: </strong> {movie.Released}
          </p>
          <p>
            <strong>Runtime: </strong> {movie.Runtime}
          </p>
          <p>
            <strong>Genre: </strong> {movie.Genre}
          </p>
          <p>
            <strong>Director: </strong> {movie.Director}
          </p>
          <p>
            <strong>Writer: </strong> {movie.Writer}
          </p>
          <p>
            <strong>Actors: </strong> {movie.Actors}
          </p>
        </div>
      </div>
      <div className="plot m-1">
        <p>{movie.Plot}</p>
      </div>
    </div>
  );
};

export default Movie;
