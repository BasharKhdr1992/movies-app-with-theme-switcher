import * as Types from './ActionTypes';

export const ShowReducer = (state, action) => {
  switch (action.type) {
    case Types.SHOWS_LOADING: {
      return { ...state, isLoading: true, error: null };
    }

    case Types.SHOWS_LOADED: {
      localStorage.setItem('shows', JSON.stringify(action.payload));
      return { ...state, isLoading: false, shows: action.payload };
    }

    case Types.SHOWS_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }

    default:
      return state;
  }
};
