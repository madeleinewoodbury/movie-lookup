import { SEARCH_MOVIES, CLEAR_MOVIES, SET_LOADING } from '../types';

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_MOVIES:
      return {
        ...state,
        movies: payload,
        loading: false
      };
    case CLEAR_MOVIES:
      return {
        ...state,
        movies: [],
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
