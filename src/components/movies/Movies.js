import React, { useContext } from 'react';
import MovieContext from '../../context/movie/movieContext';
import Spinner from '../layout/Spinner';
import MovieItem from './MovieItem';

const Movies = () => {
  const movieContext = useContext(MovieContext);
  const { movies, loading } = movieContext;
  return loading ? (
    <Spinner />
  ) : (
    <div className="grid-4">
      {movies.map(movie => (
        <MovieItem key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default Movies;
