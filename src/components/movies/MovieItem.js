import React from 'react';
import { Link } from 'react-router-dom';

const MovieItem = ({ movie: { Title, Year, imdbID, Poster } }) => {
  return (
    <div className="card">
      <div className="img-container">
        <img src={Poster} alt={`${Title} poser`} />
      </div>
      <div className="card-info">
        <Link to={`/movie/${imdbID}`}>
          <h3>
            {Title} ({Year})
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default MovieItem;
