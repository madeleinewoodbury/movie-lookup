import React, { useState, useContext } from 'react';
import MovieContext from '../../context/movie/movieContext';

const Search = () => {
  const movieContext = useContext(MovieContext);
  const [title, setTitle] = useState('');

  const handleChange = e => setTitle(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    if (title !== '') {
      movieContext.searchMovies(title);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        name="title"
        value={title}
        placeholder="Search for movie title..."
        onChange={handleChange}
      />
      <input
        type="submit"
        value="Search"
        className="btn btn-block btn-secondary"
      />
    </form>
  );
};

export default Search;
