import * as Types from './ActionTypes';

export const ShowCastReducer = (state, action) => {
  switch (action.type) {
    case Types.CAST_LOADING: {
      return { ...state, isLoading: true, error: null };
    }
    case Types.CAST_LOADED: {
      return { ...state, isLoading: false, cast: action.payload };
    }

    case Types.CAST_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }

    default:
      return state;
  }
};
