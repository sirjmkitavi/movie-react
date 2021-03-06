import * as types from "../actions/actionTypes";  // get all action types to be listened in switch case
import initialState from './initialState';  // import initialState to be passed in reduceers

// pass initial state to be changed (movies) and action{action.typr, data}
export default function movieReducer(state = initialState.movies, action) { 
  switch(action.type) {
    case types.LOAD_POPULAR_MOVIES_SUCCESS:
      return action.movies;
      
    case types.LOAD_UPCOMING_MOVIES_SUCCESS:
      return action.movies;

    case types.LOAD_MOVIE_SUCCESS:
      return [...state, action.movie];

    case types.LOAD_MOVIES_BY_GENRE_SUCCESS:
      return action.movies
    default:
      return state
  }
}
