import React, { useReducer } from 'react';
import axios from 'axios';
import MovieContext from './movieContext';
import MovieReducer from './movieReducer';
import { SEARCH_MOVIES, CLEAR_MOVIES, GET_MOVIE, SET_LOADING } from '../types';

let omdbApiKey;

if (process.env.NODE_ENV !== 'production') {
  omdbApiKey = process.env.REACT_APP_OMDB_API_KEY;
} else {
  omdbApiKey = process.env.OMDB_API_KEY;
}

const MovieState = props => {
  const initialState = {
    movies: [],
    movie: {},
    loading: false
  };

  const [state, dispatch] = useReducer(MovieReducer, initialState);

  // Search movies
  const searchMovies = async title => {
    setLoading();
    const res = await axios.get(
      `https://www.omdbapi.com/?apikey=${omdbApiKey}&s=${title}`
    );
    dispatch({
      type: SEARCH_MOVIES,
      payload: res.data.Search
    });
  };

  // Get Movie
  const getMovie = async id => {
    setLoading();
    const res = await axios.get(
      `https://www.omdbapi.com/?apikey=${omdbApiKey}&i=${id}`
    );
    dispatch({
      type: GET_MOVIE,
      payload: res.data
    });
  };

  // Clear movoies
  const clearMovies = () => dispatch({ type: CLEAR_MOVIES });

  // Set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <MovieContext.Provider
      value={{
        movies: state.movies,
        movie: state.movie,
        loading: state.loading,
        searchMovies,
        getMovie,
        clearMovies
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieState;
